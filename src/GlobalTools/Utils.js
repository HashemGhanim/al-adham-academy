const getMonthLabels = (count) => {
    const monthLabels = [];
    for (let i = 0; i < count; i++) {
        monthLabels.push(new Intl.DateTimeFormat('en-US', { month: 'short' }).format(new Date(0, i)));
    }
    return monthLabels;
};

export default getMonthLabels;