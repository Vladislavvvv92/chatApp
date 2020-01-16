
const e = React.createElement;

ReactDOM.render(e(<h1>TES</h1>), document.getElementById('root'));


/*
'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(LikeButton), domContainer);*/
