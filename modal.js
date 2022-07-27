const ourSpeakers = document.getElementById('modal');

const speakerList = [
  {
    img: 'Ariel.png',
    name: 'Ariel Camus',
    profession: 'founder and CEO of Microverse,',
    description: 'he founder and CEO of Microverse, an online school that offers opportunities to people around the world.',
  },
  {
    img: 'tim.jpg',
    name: 'Tim Bray',
    profession: 'Canadian software developer,',
    description: ' A software developer, environmentalist, political activist and one of the co-authors of the original XML specification. He also worked for Amazon Web Services, Google and Sun Microsystems. In addition he co-founded several start-ups such as Antarctica Systems.',
  },
  {
    img: 'buchheit.jpg',
    name: 'Paul Buchheit',
    profession: 'Computer engineer and enterpreneur,',
    description: ' An American computer engineer who created Gmail. He developed the original prototype of Google AdSense as part of his work on Gmail.',
  },
  {
    img: 'tracy.jpg',
    name: 'Tracy Chou',
    profession: 'A software engineer and Technology advocate,',
    description: 'A software engineer and advocate for technological diversity. Best known for raising the issue of low presentation of women in technology firms. She also co-founded the advocacy group Project in 2016.',
  },
  {
    img: 'cathy.jpg',
    name: 'Cathy Edwards',
    profession: 'Australian Software Engineer,',
    description: 'She is a software engineer and entrepreneur. She co-founded and was chief technology officer of app search engine Chomp in 2009.',
  },
  {
    img: 'linus.jpg',
    name: 'Linus Torvalds',
    profession: 'Principal developer of the Linux kernel,',
    description: ' A Finnish-American software engineer. He is the creator and the principal developer of the Linux kernel for Linux operating systems as well as other operating systems such as Android and Chrome OS. He also created the distributed version control system Git and the scuba dive logging and planning software Subsurface.',
  },

];

const loadingSpeakers = () => {
  let theSpeakers = '';

  for (let count = 0; count < speakerList.length; count += 1) {
    const cards = `<div class = "speakers-grid">
        <div class = "speakersOurs">
        <article class = "speaker-container">
            <div>
                <img class = "speaker-image" class = "img-${count + 1}" src="./images/speakers/${speakerList[count].img}" alt = "images-of-speakers"></img>
            </div>
            <div class = "speaker-content">
            <h2 class="speaker-header">${speakerList[count].name}</h2>
            <p class="speaker-profession">${speakerList[count].profession}</p>
            <p class="speaker-description">${speakerList[count].description}</p>
            </div>
        </article>
        </div>
        </div>`;

    theSpeakers += cards;
  }
  ourSpeakers.innerHTML = theSpeakers;
};
loadingSpeakers();