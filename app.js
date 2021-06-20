new fullpage('#fullpage', {
	//options here
    autoScrolling:true,
    sectionsColor: ['#003B46', '#07575B', '#66A5AD', '#C4DFE6'],
    navigation: true,
    onLeave: (origin,destination,direction)=> {
        const section = destination.item;
        console.log(section);
        TweenMax.fromTo(section, 1, {opacity: 0}, {opacity: 1},'+=500');
    }
});

