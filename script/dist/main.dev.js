"use strict";

var turtles = [{
  title: 'About Ninja Turtles',
  img: './img/Ninja_Turtles_1.png',
  imgAlt: 'Ninja Turtles',
  text: ["Teenage Mutant Ninja Turtles is an American media franchise created by the comic book artists\n             Kevin Eastman and Peter Laird. It follows Leonardo, Michelangelo, Donatello and Raphael, \n             four anthropomorphic turtle brothers (named after Italian Renaissance artists) trained in \n             ninjutsu who fight evil in New York City. Supporting characters include the turtles' rat sensei Splinter, \n             their human friends April O'Neil and Casey Jones, and enemies such as Baxter Stockman, Krang, \n             and their archenemy, the Shredder.", "The franchise began as a comic book, Teenage Mutant Ninja Turtles, which Eastman and Laird conceived \n            as a parody of elements popular in superhero comics at the time. \n            The first issue was published in 1984 by Eastman and Laird's company Mirage Studios and was a surprise success. \n            In 1987, Eastman and Laird licensed the characters to Playmates Toys, which developed a line of Turtles action figures. \n            About US$1.1 billion of Turtles toys were sold between 1988 and 1992, making them the third-bestselling \n            toy figures ever at the time.", "The action figures were promoted with an animated series, which premiered in 1987 and ran for almost a decade. \n            In some European regions, the word \"ninja\" in the name was replaced with \"hero\" for its violent connotations. \n            Three live-action films were released; the first became the highest-grossing independent film up to that point. \n            In 2009, the franchise was purchased by Viacom, now Paramount Global. Viacom commissioned a new comic series, \n            two new live-action films, and new animated series."]
}, {
  title: 'Leonardo',
  img: './img/Leo_tortuga.png',
  imgAlt: 'Leonardo',
  text: ["Leonardo, nicknamed Leo, is a superhero appearing in Teenage Mutant Ninja Turtles comics and related media, \n            and created by American comic book artists, Kevin Eastman and Peter Laird. He is one of the four central characters \n            of the franchise, along with his brothers, Donatello, Raphael and Michelangelo.", "Often depicted wearing a blue bandanna, his signature weapons are two katana. In most iterations, \n            Leonardo is the leader, as well as the most mature and disciplined of the Turtles. Like his brothers, he is named \n            after an Italian Renaissance artist, in this case, Leonardo da Vinci. In the original comics, all four of \n            the Turtles wear red masks, but for the creators to tell them apart, \n            he was written and redrawn to have an ocean-blue mask."]
}, {
  title: 'Raphael',
  img: './img/Raph-rage.png',
  imgAlt: 'Raphael',
  text: ["Raphael, nicknamed Raph, is a superhero and one of the four main characters of the Teenage Mutant Ninja Turtles \n            comics and all related media. He is the second oldest/mid-middle-child of the turtle brothers, often at odds with \n            his older brother, Leonardo.", "He is usually depicted wearing a red eye mask; in this regard, he is the only turtle to retain this color since \n            the original incarnation of the characters, as the remaining turtles received different colors at a later time. \n            Raphael wields twin sai as his primary weapon. He is commonly portrayed in media as speaking with a Brooklyn accent. \n            Raphael is known for his temperamental and cynical personality, being short-tempered, aggressive, sullen, maddened, \n            sarcastic, and rebellious. The origin of Raphael's anger is not always fully explored, but in some incarnations appears \n            to stem partly from the realization that they are the only creatures of their kind and ultimately alone, \n            while also bothered by the injustice the helpless and innocent suffer.", "Raphael has a frequent rivalry with his only older brother Leonardo because the latter is seen as the group's leader. \n            He is the second eldest of the turtles and serves as the team's enforcer. Like all of the brothers, he is named after \n            a Renaissance artist; in this case, he is named after the 16th-century Italian painter Raphael. \n            In 2011, Raphael placed 23rd on IGN's Top 100 Comic Book Heroes,[5] a list that did not feature any of his brothers. \n            He is the only Teenage Turtle brother whose name does not end in the letter \"O\", even though the artist he got his name \n            from is \"Raffaello\"."]
}, {
  title: 'Donatello',
  img: './img/Donatello_1.png',
  imgAlt: 'Donatello',
  text: ["Donatello, nicknamed Don or Donnie, is a superhero and one of the four main characters of the Teenage Mutant Ninja Turtles\n             comics and all related media. He is the smartest and often gentlest of his brothers, bearing a purple mask over his eyes.\n              He wields a b\u014D staff, his primary signature weapon in all media.", "He is the adoptive and mutated son of Master Splinter, as well as the younger brother of Leonardo and Raphael, \n            and older brother of Michelangelo. He is the third eldest/second youngest brother of the turtles, and \n            second-in-command of the team. A common trait in the franchise is that he is the tallest ninja turtle, demonstrated \n            in the original comics (however very slightly), the IDW comics, the DC crossover film, the 2014 reboot, and most notably, \n            in the 2012 animated series. Donnie often speaks in technobabble with a natural aptitude for science and technology. \n            His ninja skills are the lowest of the four turtles; as he relies on gadgets over combat skills. Like all of the brothers, \n            he is named after a Renaissance artist; in this case, he is named after Italian sculptor Donatello. \n            He is the favorite turtle of co-creator Peter Laird, who served as the basis of Donatello's personality."]
}, {
  title: 'Michelangelo',
  img: './img/Michelangelo.png',
  imgAlt: 'Michelangelo',
  text: ["Michelangelo, nicknamed Mike or Mikey, is a superhero and one of the four main characters of the Teenage Mutant \n            Ninja Turtles comics and all related media. Michelangelo is the most naturally skilled of the four brothers but prefers \n            to have a good time rather than train. The youngest of the group, he is shown to be rather immature; he is known for \n            his wisecracks, love of skateboarding, witty optimism, and, like his brothers, love of pizza. \n            He is usually depicted wearing an orange eye mask. His signature weapons are dual nunchaku, though he has also \n            been portrayed using other weapons, such as a grappling hook, manriki-gusari, kusarigama, tonfa, and a three-section staff \n            (in some action figures).", "Michelangelo was given a much bigger role in the 1987 cartoon series and subsequent series and films, directed at \n            a younger audience, than in the more serious Mirage comic books. which were aimed at an older audience, expressing interest \n            in poetry and romancing Horridus. He often coins most of their catchphrases, such as \"Cowabunga!\". Like all of the brothers, \n            he is named after an Italian Renaissance artist; in this case, he is named after Michelangelo Buonarroti. \n            His name was originally spelled \"Michaelangelo\" by the original creators, possibly misspelling his namesake's name wrong \n            by confusion with \"Michael\". In the Mirage comics, all four of the Turtles wear red masks, but to tell them apart, \n            he was given an orange mask instead."]
}, {
  title: 'Splinter',
  img: './img/splinter.png',
  imgAlt: 'Splinter',
  text: ["Splinter, often referred to as Master Splinter or Sensei by his students/sons, is a fictional character from \n            the Teenage Mutant Ninja Turtles comics and all related media. A mutant rat, he is the martial arts and ninjutsu instructor of \n            the Turtles, as well as their adoptive father. In some incarnations\u2014including the original comics\u2014he was the pet rat of \n            martial artist Hamato Yoshi (Japanese: \u6FF1\u6238\u7FA9), while in others he is a mutated or reincarnated Yoshi himself. \n            The character was originally a parody of the Marvel Comics character Stick."]
}];
var menu = document.querySelector('.menu');
var content = document.querySelector('.content');

function createMenuList(item) {
  var menuList = document.createElement('ul');
  menuList.classList.add('menu__list');
  menu.append(menuList);

  for (item in turtles) {
    var menuItem = document.createElement('li');
    menuItem.classList.add('menu__list-item');
    menuItem.textContent = turtles[item]['title'];
    menuList.append(menuItem);
  }
}

createMenuList();

function getContentOnclick(e) {
  var event = e.target;

  if (event.classList.contains('menu__list-item')) {
    var menuItems = document.querySelectorAll('li');
    menuItems.forEach(function (item, i) {
      if (event === item) {
        menuItems[i].classList.add('active');
        createContent(turtles[item]);
      } else {
        menuItems[i].classList.remove('active');
      }
    });
  }
}

var menuList = document.querySelector('ul');
menuList.addEventListener('click', getContentOnclick);

function createContent(item) {
  var title = document.createElement('h2');
  title.classList.add('content__title');
  title.textContent = item['title'];
  content.append(title);
  var imgBlock = document.createElement('div');
  imgBlock.classList.add('content__img');
  content.append(imgBlock);
  var img = document.createElement('img');
  img.src = item['img'];
  img.alt = item['imgAlt'];
  imgBlock.append(img);
  var pFirst = document.createElement('p');
  pFirst.textContent = item['text'][0];
  content.append(pFirst);
  var pSecond = document.createElement('p');
  pSecond.textContent = item['text'][1];
  content.append(pSecond);
  var pThird = document.createElement('p');
  pThird.textContent = item['text'][2];
  content.append(pThird);
}

createContent(turtles[0]);