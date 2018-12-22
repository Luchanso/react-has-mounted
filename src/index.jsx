const hoc = (Component) => {
    return class {
        state = {
            hasMounted: false
        };

        componentDidMount() {
            this.setState({
                hasMounted: true
            })
        }

        render() {
            return (
                <Component {...this.props} hasMounted={ this.state.hasMounted } />
            )
        }
    }
}

export default hoc;