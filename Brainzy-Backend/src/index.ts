import express from "express";
import { random } from "./utils";
import jwt from "jsonwebtoken";
import { ContentModel, LinkModel, UserModel } from "./db";
import { JWT_SECRET } from "./config";
import { userMiddleware } from "./middleware";
import cors from "cors";

const app = express();
app.use(express.json()); 
app.use(cors()); 




// Route 1: User Signup
app.post("/api/v1/signup", async (req, res) => {
    
    const username = req.body.username;
    const password = req.body.password;

    try {
        
        await UserModel.create({ username, password });
        res.json({ message: "User signed up" }); 
    } catch (e) {
        
        res.status(409).json({ message: "User already exists" }); 
    }
});

// Route 2: User Signin
app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    
    const existingUser = await UserModel.findOne({ username, password });
    if (existingUser) {
        
        const token = jwt.sign({ id: existingUser._id }, JWT_SECRET);
        res.json({ token }); 
    } else {
        
        res.status(403).json({ message: "Incorrect credentials" });
    }
});

// Route 3: Add Content
app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const { link, type, title } = req.body;
    
    await ContentModel.create({
        link,
        type,
        title,
        userId: req.userId, 
        tags: [] 
    });

    res.json({ message: "Content added" }); 
});


app.get("/api/v1/content", userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;  

    const content = await ContentModel.find({ userId: userId }).populate("userId", "username");
    res.json(content);  
});

// Route 5: Delete User Content
app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;

    // Delete content based on contentId and userId.
    await ContentModel.deleteMany({ contentId, userId: req.userId });
    res.json({ message: "Deleted" }); 
});

// Route 6: Share Content Link
app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
    const { share } = req.body;
    if (share) {
        // Checking if a link already exists for the user.
        const existingLink = await LinkModel.findOne({ userId: req.userId });
        if (existingLink) {
            res.json({ hash: existingLink.hash }); 
            return;
        }

        
        const hash = random(10);
        await LinkModel.create({ userId: req.userId, hash });
        res.json({ hash }); 
    } else {
        
        await LinkModel.deleteOne({ userId: req.userId });
        res.json({ message: "Removed link" }); 
    }
});

// Route 7: Get Shared Content
app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;

    
    const link = await LinkModel.findOne({ hash });
    if (!link) {
        res.status(404).json({ message: "Invalid share link" }); 
        return;
    }

    // Fetch content and user details for the shareable link.
    const content = await ContentModel.find({ userId: link.userId });
    const user = await UserModel.findOne({ _id: link.userId });

    if (!user) {
        res.status(404).json({ message: "User not found" }); 
        return;
    }

    res.json({
        username: user.username,
        content
    }); 
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});