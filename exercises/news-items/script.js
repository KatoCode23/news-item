console.log('newsItems: ', newsItems);

    for(var i = 0; i < newsItems.length; i++) {
        var newsList = document.getElementById('news-item__list');
        var newsItem = document.createElement('li');
        newsItem.className += 'news-item';
        var newsItemDate = document.createElement('h4');
        newsItemDate.className += 'news-item__date';
        var newsItemAuthor = document.createElement('h6');
        newsItemAuthor.className += 'news-item__author';
        var newsItemSummary = document.createElement('p');
        newsItemSummary.className += 'news-item__summary';
        var newsItemImage = document.createElement('img');
        newsItemImage.className += 'news-item__image';
        newsItemImage.src = newsItems[i].image;
        var newsItemNetwork = document.createElement('a');
        newsItemNetwork.className = 'news-item__network';
        newsItemNetwork.href = newsItems[i].link;
        newsItemNetwork.innerText = newsItems[i].author;
        newsItem.appendChild(newsItemDate);
        newsItem.appendChild(newsItemAuthor);
        newsItem.appendChild(newsItemSummary);
        newsItem.appendChild(newsItemImage);
        newsItem.appendChild(newsItemNetwork);
        newsList.appendChild(newsItem);
        newsItemDate.innerText = newsItems[i].date;
        newsItemAuthor.innerText = newsItems[i].author;
        newsItemSummary.innerText = newsItems[i].summary;           
    }