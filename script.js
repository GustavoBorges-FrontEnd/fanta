// Criação de uma timeline do GSAP com animações sincronizadas com o scroll//

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
    },
});

tl.to(
    '#fanta',
    {
        top: '100%',
        left: '0%',
    },
    'orange',
);

tl.to(
    '#laranja-cortada',
    {
        top: '140%',
        left: '23%',
    },
    'orange',
);

tl.to(
    '#laranja',
    {
        width: '15%',
        top: '165%',
        right: '10%',
    },
    'orange',
);

tl.to(
    '#folha',
    {
        top: '110%',
        rotate: '1030deg',
        left: '70%'
    },
    'orange',
);

tl.to(
    '#folha2',
    {
        top: '110%',
        rotate: '530deg',
        left: '0%'
    },
    'orange',
);

// CRIANDO OUTRA TIMELINE


var tg = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%',
        scrub: true,
    },
});

tg.from(
    '.lemon1',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca',
);

tg.from(
    '#cocacola',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca',
)

tg.from(
    '.lemon2',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca',
);

tg.from(
    '#pepsi',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca',
)

tg.to(
    '#laranja-cortada',
    {
        width: '20vw',
        left: '40%',
        top: '199%',
    },
    'ca',
)

tg.to(
    '#fanta',
    {
        left: '30%',
        top: '202%',
    },
    'ca',
)
