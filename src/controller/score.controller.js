const ScoreService = require("../service/score.service")
exports.addScore = async (req, res) => {
    try {
        const createScore = await ScoreService.addScore(req)
        return res.status(200).json({ data: createScore })
    } catch (error) {
        return res.status(500)
    }
}
exports.getScore = async (req, res) => {
    try {
        const allScore = await ScoreService.getScore()
        return res.status(200).json({ data: allScore })
    } catch (error) {
        return res.status(500)
    }
}
exports.updateScore = async (req, res) => {
    try {
        const Score = await ScoreService.updateScore(req)
        return res.status(200).json({ data: Score })
    } catch (error) {
        return res.status(500)
    }
}
exports.deleteScore = async (req, res) => {
    try {
        const Delete = await ScoreService.deleteScore(req)
        return res.status(200).json({ data: Delete })
    } catch (error) {
        return res.status(500)
    }
}
exports.getScoreById = async (req, res) => {
    try {
        const userId = req.params.id;
        const allScore = await ScoreService.getScore()
        var ScoreList = [];
        allScore.forEach(s => {
            if (s.UserId == userId) {
                ScoreList.push(s);
            }
        })
        return res.status(200).json({ data: ScoreList })
    } catch (error) {
        return res.status(500)
    }
}
