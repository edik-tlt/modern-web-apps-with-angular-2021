let feedId = 1;
let itemId = 1;
module.exports = {
  feeds: [{
    id: feedId++, name: 'First Feed', url: 'https://www.mysite1.com/atom',
    items: [
      {id: itemId++, title: '(First Feed) Feed Item 1', content: 'First Feed - First Item Content', url:'https://www.mysite1.com/1'},
      {id: itemId++, title: '(First Feed) Feed Item 2', content: 'First Feed - Second Item Content', url:'https://www.mysite1.com/2'},
      {id: itemId++, title: '(First Feed) Feed Item 3', content: 'First Feed - Third Item Content', url:'https://www.mysite1.com/3'},
      {id: itemId++, title: '(First Feed) Feed Item 4', content: 'First Feed - Fourth Item Content', url:'https://www.mysite1.com/4'},
      {id: itemId++, title: '(First Feed) Feed Item 5', content: 'First Feed - Fifth Item Content', url:'https://www.mysite1.com/5'},
      {id: itemId++, title: '(First Feed) Feed Item 6', content: 'First Feed - Sixth Item Content', url:'https://www.mysite1.com/6'},
      {id: itemId++, title: '(First Feed) Feed Item 7', content: 'First Feed - Seventh Item Content', url:'https://www.mysite1.com/7'},
      {id: itemId++, title: '(First Feed) Feed Item 8', content: 'First Feed - Eighth Item Content', url:'https://www.mysite1.com/8'},
      {id: itemId++, title: '(First Feed) Feed Item 9', content: 'First Feed - Nineth Item Content', url:'https://www.mysite1.com/9'},
      {id: itemId++, title: '(First Feed) Feed Item 10', content: 'First Feed - Tenth Item Content', url:'https://www.mysite1.com/10'},
    ]
  },{
    id: feedId++, name: 'Second Feed', url: 'https://www.mysite2.com/atom',
    items: [
      {id: itemId++, title: '(Second Feed) Feed Item 1', content: 'Second Feed - First Item Content', url:'https://www.mysite2.com/1'},
      {id: itemId++, title: '(Second Feed) Feed Item 2', content: 'Second Feed - Second Item Content', url:'https://www.mysite2.com/2'},
      {id: itemId++, title: '(Second Feed) Feed Item 3', content: 'Second Feed - Third Item Content', url:'https://www.mysite2.com/3'},
      {id: itemId++, title: '(Second Feed) Feed Item 4', content: 'Second Feed - Fourth Item Content', url:'https://www.mysite2.com/4'},
      {id: itemId++, title: '(Second Feed) Feed Item 5', content: 'Second Feed - Fifth Item Content', url:'https://www.mysite2.com/5'},
      {id: itemId++, title: '(Second Feed) Feed Item 6', content: 'Second Feed - Sixth Item Content', url:'https://www.mysite2.com/6'},
      {id: itemId++, title: '(Second Feed) Feed Item 7', content: 'Second Feed - Seventh Item Content', url:'https://www.mysite2.com/7'},
      {id: itemId++, title: '(Second Feed) Feed Item 8', content: 'Second Feed - Eighth Item Content', url:'https://www.mysite2.com/8'},
      {id: itemId++, title: '(Second Feed) Feed Item 9', content: 'Second Feed - Nineth Item Content', url:'https://www.mysite2.com/9'},
      {id: itemId++, title: '(Second Feed) Feed Item 10', content: 'Second Feed - Tenth Item Content', url:'https://www.mysite2.com/10'},
    ]
  }],
  add(url) {
    let fId = feedId++;
    let feed = {
      id: fId,
      name: `Feed ${fId}`,
      url,
      items: [
        {id: itemId++, title: `(Feed ${fId}) Feed Item 1`, content: `Feed ${fId} - First Item Content`, url:'https://www.mysite2.com/1'},
        {id: itemId++, title: `(Feed ${fId}) Feed Item 2`, content: `Feed ${fId} - Second Item Content`, url:'https://www.mysite2.com/2'},
        {id: itemId++, title: `(Feed ${fId}) Feed Item 3`, content: `Feed ${fId} - Third Item Content`, url:'https://www.mysite2.com/3'},
        {id: itemId++, title: `(Feed ${fId}) Feed Item 4`, content: `Feed ${fId} - Fourth Item Content`, url:'https://www.mysite2.com/4'},
        {id: itemId++, title: `(Feed ${fId}) Feed Item 5`, content: `Feed ${fId} - Fifth Item Content`, url:'https://www.mysite2.com/5'},
        {id: itemId++, title: `(Feed ${fId}) Feed Item 6`, content: `Feed ${fId} - Sixth Item Content`, url:'https://www.mysite2.com/6'},
        {id: itemId++, title: `(Feed ${fId}) Feed Item 7`, content: `Feed ${fId} - Seventh Item Content`, url:'https://www.mysite2.com/7'},
        {id: itemId++, title: `(Feed ${fId}) Feed Item 8`, content: `Feed ${fId} - Eighth Item Content`, url:'https://www.mysite2.com/8'},
        {id: itemId++, title: `(Feed ${fId}) Feed Item 9`, content: `Feed ${fId} - Nineth Item Content`, url:'https://www.mysite2.com/9'},
        {id: itemId++, title: `(Feed ${fId}) Feed Item 10`, content: `Feed ${fId} - Tenth Item Content`, url:'https://www.mysite2.com/10'},
      ]
    };

    this.feeds.push(feed);

    return feed;
  },
  remove(feedId) {
    let index = this.feeds.findIndex(f => f.id === parseInt(feedId,10));

    if (index > -1) {
      this.feeds.splice(index, 1);
    }
  }
};