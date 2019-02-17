import { ListTrucks } from './ListTrucks';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ICommonState } from '../../reducers/common';
import * as commonActions from '../../actions/common';

const mapStateToProps = (state: any) => {
    return {

    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: {
            modalForm: bindActionCreators(commonActions, dispatch),
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTrucks);