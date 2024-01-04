const blackScreenClicked = ()=>{
    document.getElementsByTagName("body")[0].style.overflow='visible';
    const userOwnNavbarWhite = document.getElementById("user-own-navbar-white");
    if(userOwnNavbarWhite != null){
        userOwnNavbarWhite.classList.remove("toRightAnimation");
        userOwnNavbarWhite.classList.add("toLeftAnimation");
    }
    setTimeout(()=>{
        const userOwnNavbar = document.getElementById("user-own-navbar");
        if(userOwnNavbar != null)
            userOwnNavbar.classList.add("display-none");
    } , 450);
}

const rateListItemClicked = ()=>{
    setTimeout(()=>{
        const userOwnRateBlack = document.getElementById("user-own-rate");

        if(userOwnRateBlack != null)
            userOwnRateBlack.classList.remove("display-none");
        document.getElementsByTagName("body")[0].style.overflow='hidden';
        console.log(document.getElementsByTagName("body")[0].style.overflow);
    } , 100)
    setTimeout(blackScreenClicked,101);
}
const userImageHandler = ()=>{
    const userOwnNavbarWhite = document.getElementById("user-own-navbar-white");
    const userOwnNavbar = document.getElementById("user-own-navbar");

    if(userOwnNavbar != null)
        userOwnNavbar.classList.remove("display-none");
    if(userOwnNavbarWhite != null){
        userOwnNavbarWhite.classList.remove("toLeftAnimation");
        userOwnNavbarWhite.classList.add("toRightAnimation");
    }
    document.getElementsByTagName("body")[0].style.overflow='hidden';
}

const rateCrossClicked = ()=>{
    const userOwnRateBlack = document.getElementById("user-own-rate");

    if(userOwnRateBlack != null)
        userOwnRateBlack.classList.add("display-none");
    document.getElementsByTagName("body")[0].style.overflow='visible';
}

export {
    blackScreenClicked,
    rateListItemClicked,
    userImageHandler,
    rateCrossClicked
}