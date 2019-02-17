import { ModalForm } from './ModalForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ICommonState } from '../../reducers/common';
import * as commonActions from '../../actions/common';

const mapStateToProps = (state: any) => {
    return {
        common: state.common,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);