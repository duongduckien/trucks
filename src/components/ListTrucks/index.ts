import { ListTrucks } from './ListTrucks';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commonActions from '../../actions/common.action';
import * as trucksActions from '../../actions/trucks';
import * as driversActions from '../../actions/drivers';

const mapStateToProps = (state: any) => {
    return {
        trucks: state.trucks,
        drivers: state.drivers,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: {
            modal: bindActionCreators(commonActions, dispatch),
            trucks: bindActionCreators(trucksActions, dispatch),
            drivers: bindActionCreators(driversActions, dispatch),
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTrucks);