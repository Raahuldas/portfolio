function scrollto(sectionid){
    const targetSection = document.getElementById(sectionid);
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior:"smooth"
        });
    }
}