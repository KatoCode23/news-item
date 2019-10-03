console.log('newsItems: ', newsItems);

    for(var i = 0; i < newsItems.length; i++) {
        var newsList = document.getElementById('news-item__list');
        var newsItem = document.createElement('li');
        newsItem.className += 'news-item';
        var newsItemDetails = document.createElement('div');
        var summaryContainer =document.createElement('div');
        var newsItemNetwork = document.createElement('a');
        newsItemNetwork.href = newsItems[i].link;
        newsItemNetwork.target = '_blank';
        newsItemNetwork.className += 'news-item__network'
        var newsItemAuthor = document.createElement('h6');
        newsItemAuthor.className += 'news-item__author';
        newsItemDetails.className += 'news-item__details';
        var newsItemDate = document.createElement('h4');
        newsItemDate.className += 'news-item__date';
        var newsItemSummary = document.createElement('p');
        newsItemSummary.className += 'news-item__summary';
        var newsItemImage = document.createElement('img');
        newsItemImage.className += 'news-item__image';
        newsItemImage.src = newsItems[i].image;
        newsItemDetails.appendChild(newsItemImage);
        newsItemDetails.appendChild(summaryContainer);
        summaryContainer.appendChild(newsItemDate);
        summaryContainer.appendChild(newsItemSummary);
        newsItem.appendChild(newsItemNetwork);
        newsItemNetwork.appendChild(newsItemAuthor);
        newsItem.appendChild(newsItemDetails);
        newsList.appendChild(newsItem);
        newsItemDate.innerText = newsItems[i].date;
        newsItemAuthor.innerText = newsItems[i].author;
        newsItemSummary.innerText = newsItems[i].summary;           
    }