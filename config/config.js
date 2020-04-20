module.exports = {
   debug: true /* True means visible browser, false unvisible */,
   lang: 'en' /* Log's language in console */,
   userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:70.0) Gecko/20100101 Firefox/70.0' /* Optional */,
   username: '<username>' /* username */,
   password: '<password>' /* password */,
   hashtags: ['cars', 'warsaw', 'szczecin'] /* hashtags */,
   likesPerHashtag: 5 /* likes for one hashtag */,
   breakBetweenLikes: 15000 /* breakdown between likes */,
   breakBetweenHashtags: 60000 /* breakdown between hashtags */,
   mode: 'autolike' /* Currently only available autolike */,
};
