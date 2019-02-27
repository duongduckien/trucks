import { ModalForm } from './ModalForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ICommonState } from '../../reducers/common.reducer';
import * as commonActions from '../../actions/common.action';

const mapStateToProps = (state: any) => {
    return {
        common: state.common,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: {
            modalForm: bindActionCreators(commonActions, dispatch),
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);