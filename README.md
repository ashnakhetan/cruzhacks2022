# TrashTalk
Submitted to CruzHacks in Jan 2022; *Won EarthHacks prize*; article about it: https://earthhacksorg.medium.com/e-25789589d683

Collaborators: Ashna Khetan, Matthew Vilaysack

Submission Link: https://devpost.com/software/trashtalk-cbq3rz

Try it Out: https://ashnakhetan.github.io/trashtalk/

## Inspiration
My parents have the same debate every day: my dad believes that he can recycle cardboard pizza boxes, while my mom believes it is too greasy. And it's not just pizza boxes... it's yogurt containers, plastic saran wrap, foil, styrofoam, and just about any other ambiguous item you can think of. These debates got me thinking: wouldn't it be wonderful if there were a way to conveniently check how to dispose of a waste item, while actively educating my parents?

## What it does
TrashTalk is a chatbot that gives a user advice on where to dispose of their waste. It provides educated & educational responses that not only give you an immediate answer but also enough information to learn why. And, it's self-aware. On the site itself, you can explore resources, classification charts, and more!

## How we built it
We build the web-app using React.js and components from Material UI. Our chatbot was trained using Google's DialogFlow and integrated into our web app using Kommunicate.

## Challenges we ran into
One challenge I ran into was finding a secure, adaptable way to add my chatbot to my React app. Previously, I was using ngrok to host the bot on my local server, but soon realized it may cause vulnerability and would likely be a short-term implementation. This is where we decided to use Kommunicate, which allowed us to add the chatbot widget as a component to the web app. Another challenge was the vast amount of research that went into classifying waste items. No wonder 62% of Americans are confused about whether or not certain items are recyclable! In order to give clear advice on the items that people are most confused about, we had to do deep research into topics such as the classes of plastic and local regulations.

## Accomplishments that we're proud of
One feature I am proud of is the bot's welcome message. In order to implement buttons and images in the bot's responses, I had to figure out how to write a JSON message as a custom payload for the bot, which was difficult at first, but turned up beautiful in the end!

## What we learned
I learned a lot about conversational AI, especially how you can train a bot to capture certain entities within human requests and use those entities to produce specific responses. What we learned most of all-- working in a team makes this so much better, easier, and more enjoyable!

## What's next for TrashTalk
We will continue to train our bot every time we learn something new about ways to help our environment through waste. We plan to integrate a Recycling Location API that contains specific information on what items each Recycling facility across the country accepts, thus aiding our chatbot to provide even more personalized advice. We'd also show the facilities on a map, keeping our citizens as informed as possible.

Built With
- dialogflow
- google-cloud
- javascript
- node.js
- material-ui
- react.js
