import { ListTrucks } from './ListTrucks';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ICommonState } from '../../reducers/common';
import * as commonActions from '../../actions/common';

const mapStateToProps = (state: ICommonState) => {
    return {
        openModalForm: state.openModalForm,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: {
            openModalForm: bindActionCreators(commonActions, dispatch),
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTrucks);