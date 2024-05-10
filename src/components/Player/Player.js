import { Component } from "react";
import ReactPlayer from "react-player";

export default class Player extends Component {
    state = {
        isViadeoLoaded: false
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.url !== this.props.url) {
            this.setState({})
        }
    }

    isVideoReady = () => {
        this.setState(({isViadeoLoaded}) => ({
            isViadeoLoaded: !isViadeoLoaded
        }))
    }

    render() {
        const {isViadeoLoaded} = this.state
        const {url} = this.props
        const playerSize = isViadeoLoaded ? "50%" : 0
        return (
            <>
                {url && !isViadeoLoaded && <div>Loading...</div>}
                {url && (
                <div>
                    <ReactPlayer
                        url={url}
                        width={playerSize}
                        height={playerSize}
                        onReady={() => this.isVideoReady()}
                        controls
                    />
                </div>
            )}
            </>
        )
    }
}