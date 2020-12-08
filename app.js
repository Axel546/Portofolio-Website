new fullpage('#fullpage', {
	//options here
    autoScrolling:true,
    sectionsColor: ['#68b0ab', '#8fc0a9', '#c8d5b9', '#faf3dd'],
    navigation: true,
    onLeave: (origin,destination,direction)=> {
        const section = destination.item;
        console.log(section);
        TweenMax.fromTo(section, 1, {opacity: 0}, {opacity: 1},'+=700');
    }
});

