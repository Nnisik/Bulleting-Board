function Post() {
    return (
        <div class="post">
            <h3>Post Header</h3>
            <p class="post-descrip">descrip-descrip-descrip-descrip-descrip</p>
            <div class="post-info">
                <p>Rayan Gosling</p>
                <p>17.01.2024</p>
            </div>
        </div>
    );
}

function Board() {
    const nums = [1, 2, 3, 4, 5, 6];

    return (
        <div class="board">
            {nums.map(num => (
                <Post />
            ))}
        </div>
    );
}

ReactDOM.render(<Board />, document.querySelector("#board-container"));