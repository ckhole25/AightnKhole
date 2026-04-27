// =============================================
//  LETTERS — Add your personal messages below!
// =============================================

const letters = [
  {
    title: "When you feel overwhelmed",
    content: `Hi bebe, breathe.

I know right now everything feels like it's piling up especially with all the studying and endless activities, I understand  it's a lot to carry all at once. But I want you to know, you got this po. I'll always be here whenver you feel like it's all too much na ha

Make sure to always remember to take it one breath at a time. I believe in you and you're so very much capable of all the stuff that you put your mind to. Just remember to take breaks when you have to po 

You've got this, Aight. You always do. 💕`
  },
  {
    title: "When you feel sad",
    content: `My sweet pretty girl Aight, I know sometimes the world can feel heavy and your heart can feel like it's carrying too much.

It's okay to feel that way bebe.Let yourself feel it don't rush it, don't fight it. Sadness means your heart is big enough to feel deeply, and that's one of the most beautiful things about you po.

Whatever it is that's making your heart heavy, I hope you know that it won't last forever. The sky always gets bright again after the storm.

I just want to let you know that I'm here. Even through a screen, even through the miles, I'm holding your hand in every way that I can.

You are so loved. Never forget that. 🌸`
  },
  {
    title: "When you need assurance",
    content: `Let me remind you of some things, because sometimes we forget:

You are enough. Exactly as you are right now, in this moment.

You are not too much. You are not too little. You are not a burden. You are not hard to love.

I chose you. I keep choosing you. Not because I have to, but because you make everything a little warmer, a little brighter, a little more worth it.

Whatever doubts crept in today I hope this letter chases them away. You are everything, pretty girl. Everything. 💗`
  },
  {
    title: "When I miss you",
    content: `Missing you feels like a song stuck in my head, sweet, a little aching, impossible to ignore.

I keep thinking about your laugh. The way you talk about the things you love. The way you make ordinary moments feel like something worth remembering.

Distance is hard. I won't pretend it isn't. But every time I miss you, it also reminds me how lucky I am to have someone worth missing this much.

Can't wait for the next time I get to be with you — or even just hear your voice. Until then, this letter is a little hug from me to you.

I miss you so much. 🌷`
  },
  {
    title: "Open when we're together officially",
    content: `hehe Hi bebe. 😊

If you're reading this, then we made it.You;re officially my BEBE And I just want to say, I knew. I think I knew for a while that this was where we were heading, and I'm so happy I was right.

You deserve to be loved loudly. To have someone who picks you every single day without question. And I want to be that person for you.

I will be doing my best to show up for you in the big moments and in the quiet ones. I promise to make you feel safe, cherished, and never alone.

Thank you for being my person.

I love you, Aight. Wholeheartedly and completely. 💕✨`
  },
  {
    title: "A letter for apology",
    content: `Hi bebeeee, 🌸

 I never wanted to give you a reason to feel hurt or disappointed in me, and I know how that foolish mistake had impacted you and I never want to make you feel that way ever again. I mean it when I said I wanna show you what true and genuine love feels like and I hope when, or if you're able to recieve this message, please don't view it as me just apologizing for the sake of being forgiven, I know how insensitive that was of me knowing that stuff like that doesn't sit right with you, if this is the last time i get to have some form of connection with you, I just want you to know that I view you as a very precious person person to me. Those moments where we just sit and talk will always be engraved inside of me, you're the only person who had the faintest conception of what i mean whenever I say something, you'll always be a breath of fresh air to anyone you'll meet because you have a warm heart and soul, I hope you don't view this message as me just wanting to feel better for the mistake that I made, I Hope you view it as me being grateful and honored to have experienced you and get to make memories with, memories that I'll cherish for a lifetime.

I only wanted to become a place for you to call home whenever the world becomes too cruel to you, I know I sound stupid and I know you'll make faces whenever you do get to read this message, that "wag kanah" phrase you always say whenever i try to tease you , the "gets gets" phrase whenver we simoultaneously understood each others references. I rememeber telling you once that I never onced believed in soulmates, but then I met you and that perspective of mine changed.


I'm writing this while our song plays beside me, "Balikat at Beywang", I remember us being so shocked how the song fits so perfectly on our first ever picture together, and I'm also writing this while your birthday is coming up and it sucks I don't get the chance to spend your special day with you, I still think of you and I'm certain anything you wish for will come into fruition, that's just the kind of person you are, I was blessed enough to have spent meaningful moments with you and I'll forever be grateful for that. I miss you, I've never felt a silence that echoed this loud, it feels like a never ending longing for something that I know will eventually eat me up, I do hope somehow and someway I was able to make you feel that genuiness that you'd been looking for.


I'm not gonna lose hope but I'm also not gonna force you into ultimately reaching out, I firmly believe we met for a reason and something inside of me is certain that this is not how its supposed to end, maybe I'm just delusional, maybe I'm wrong, maybe this is just as far as we go, but I'd be running away from who I really am if I didn't give it a try, If I dont give every drop of my blood and sweat into somehow making things work out for us, it wouldn't be me. I know you're the type of person who stands firmly into the things that you know isn't right for you, but I also do know that a part of you will never lose hope in the essence of loving someone wholeheartedly, and the desire to know and feel ther tenderness of growing and becoming the ideal versions of oursevels with someone you care so deeply about. What I'm trying to say is, if it comes a time where you find yourself in the posistion to love again, I hope and I wish that it's with me, I know that phrase came from a novel but it really resonates with how I truly feel, knowing you, you for sure would find that corny af kaso wala corny talaga ako wahhahaha. I miss you deeply, aight, I hope you're not forgetting to take your meds if ever u do have some pa, drink plenty of water ang init pa naman jan sa pinag sstudyhan mo.

Best of wishes. Aighttt. 💕`
  }
];

// =============================================
//  Modal Logic — no need to edit below
// =============================================

function openLetter(index) {
  const letter = letters[index];
  document.getElementById('letterTitle').textContent = letter.title;
  document.getElementById('letterBody').textContent = letter.content;
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLetter() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLetter();
});