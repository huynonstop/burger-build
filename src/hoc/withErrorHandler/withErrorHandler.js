import React, { Component } from 'react'
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state={
            error: null
        }
        componentWillMount() {
            this.reqInterceptors = axios.interceptors.request.use(req => {
                this.setState({error : null})
                return req
            })
            this.resInterceptors = axios.interceptors.response.use(res => res,error => {
                this.setState({error : error})
            })
        }
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptors)
            axios.interceptors.response.eject(this.resInterceptors)
        }
        errorConfirmHandler = () => {
            this.setState({ error: null })
        }
        render() {
            return (
                <>
                    <Modal show={this.state.error} cancel={this.errorConfirmHandler}>
                        {this.state.error ? this.state.error.message : ""}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </>
            )
        }
    }
}


export default withErrorHandler


// import React from 'react'
// import Modal from '../../components/UI/Modal/Modal'
// import useHttpErrorHandler from "../../hooks/http-error-handle"

// const withErrorHandler = (WrappedComponent, axios) => {
//     return props => {
//         const [error, clearError] = useHttpErrorHandler(axios)
//         return (
//             <>
//                 <Modal show={error} cancel={clearError}>
//                     {error ? error.message : ""}
//                 </Modal>
//                 <WrappedComponent {...props} />
//             </>
//         )
//     }
// }

// export default withErrorHandler
