export const formatScore = (score) => {
    return `${score.toFixed(2)} / 10`;
};

export const formatStudentId = (id) => {
    return `Student ID: ${id}`;
};

export const formatSubjectStatistics = (statistics) => {
    return {
        subject: statistics.subject,
        averageScore: statistics.averagescore.toFixed(2),
        highScore: statistics.highscore,
        lowScore: statistics.lowscore,
        goodScore: statistics.goodscore,
    };
};