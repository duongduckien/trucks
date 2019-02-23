import { ListTrucks } from './ListTrucks';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commonActions from '../../actions/common';
import * as trucksActions from '../../actions/trucks';

const mapStateToProps = (state: any) => {
    return {
        trucks: state.trucks,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: {
            modalForm: bindActionCreators(commonActions, dispatch),
            trucks: bindActionCreators(trucksActions, dispatch),
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTrucks);