import { TruckModal } from './TruckModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commonActions from '../../../actions/common.action';
import * as truckActions from '../../../actions/trucks.action';
import * as driverActions from '../../../actions/drivers.action';

const mapStateToProps = (state: any) => {
    return {
        common: state.common,
        trucks: state.trucks,
        drivers: state.drivers,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: {
            modal: bindActionCreators(commonActions, dispatch),
            truck: bindActionCreators(truckActions, dispatch),
            driver: bindActionCreators(driverActions, dispatch),
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TruckModal);