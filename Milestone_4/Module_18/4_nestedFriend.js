let yourScore = 5;

if(yourScore >= 80){
    let yourFriendScore = 60;

    if(yourFriendScore >= 80){
        console.log("Take your friend to a lunch!");
    }
    else if(yourFriendScore < 80 && yourFriendScore >= 60) {
        console.log("Tell your friend - Good Luck!");
    }
    else if(yourFriendScore < 60 && yourFriendScore >= 40) {
        console.log("Keep your friend's message unseen!")
    }
    else{
        console.log("Block your friend!");
    }
}

else{
    console.log("Go to home, sleep & act sad!");
}
