import { Router } from 'express';
const router = Router();

router.all('/', (req, res) => { // http://localhost:5000/api
    res.send("Hello");
})

export default router;