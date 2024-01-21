<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <link rel="stylesheet" href="./style/new-style.css" />
        <title>Доска Объявлений</title>
    </head>
    <body>
        <div id="header"></div>
        <div class="main">
            <div class="flex main-search">
                <input type="text" name="q" id="search-input" class="no-border main-search-input" placeholder="Search..."/>
                <button class="no-border main-search-btn">
                    <img src="./img/icons8-search-48.png" alt="" />
                </button>
            </div>
            <div class="flex main-header">
                <div class="flex">
                    Browse<p id="search-category">All</p><p id="found-reselts" class="orange">"5 found"</p>
                </div>
                <button id="sort-btn" class="main-header-sort-btn">Sort</button>
            </div>
        </div>
        <div class="flex container">
            <div class="flex flex-column filters-area">
                <div class="filters-area-parametrs">
                    <div class="filters-area-header">Filters</div>
                    <div class="filtes-group">Shop by Category</div>
                </div>
                <button id="filters-btn" class="no-border filters-btn">Save Filters</button>
            </div>
            <div id="board-container"></div>
        </div>
        <script type="text/babel" src="./js/nav.js"></script>
        <script type="text/babel" src="./js/board.js"></script>
    </body>
</html>
