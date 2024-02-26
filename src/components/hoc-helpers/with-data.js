import React, {Component} from "react";
import Spiner from "../spiner/spiner";
import ErrorInd from "../error-indicator/error-indicator";

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            loading: true,
            error: false,
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            if (this.props.getData !== prevProps.getData) {
                this.update();
            }
        }

        componentDidMount() {
            this.update();
        }

        update() {
            this.setState({
                loading: true,
                error: false,
            })

            this.props.getData
                .then((data) => {
                    // console.log(data);
                    this.setState({
                        data,
                        loading: false,
                    })
                })
                .catch(() => {
                    this.setState({
                        error: true,
                        loading: false,
                    })
                })
        }

        render() {
            const {data, loading, error} = this.state;

            if (error) {
                return <ErrorInd/>
            }

            if (loading) {
                return <Spiner/>
            }

            return <View {...this.props} data={data}/>
        }
    };
}

export default withData;
