const totalLikesLSKey = 'totalLikes';

if (!localStorage.getItem(totalLikesLSKey)) {
    saveLSTotalLikes({});
}
let totalLikes = JSON.parse(localStorage.getItem(totalLikesLSKey));


function saveLSTotalLikes(totalLikes) {
    localStorage.setItem(totalLikesLSKey, JSON.stringify(totalLikes));
}

function addLikeToTotal(pictureId, activeUser) {
    if (!totalLikes[pictureId]) {
        const newLike = {};
        newLike[pictureId] = [];
        totalLikes = { ...totalLikes, ...newLike };
        totalLikes[pictureId].push(activeUser);
    } else {
        if (!totalLikes[pictureId].includes(activeUser)) {
            totalLikes[pictureId].push(activeUser);
        }
    }
    saveLSTotalLikes(totalLikes);
}

function removeLikeToTotal(dislikedPictureId, activeUser) {
    const index = totalLikes[dislikedPictureId].indexOf(activeUser)
    totalLikes[dislikedPictureId].splice(index, 1);
    saveLSTotalLikes(totalLikes);
}

function getTotalLikes(pictureId) {
    if (totalLikes[pictureId]) {
        return totalLikes[pictureId].length;
    }
    return 0;
}


export { addLikeToTotal, removeLikeToTotal, getTotalLikes }
