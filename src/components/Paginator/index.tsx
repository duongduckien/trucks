import { Paginator } from './Paginator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as trucksActions from '../../actions/trucks.action';

const mapStateToProps = (state: any) => {
    return {
        trucks: state.trucks,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: {
            trucks: bindActionCreators(trucksActions, dispatch),
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);