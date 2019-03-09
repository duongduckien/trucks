import * as React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import i18n from '../../utilities/i18n';
import './styles.scss';

// Config
import * as configData from '../../assets/data/config.json';

interface IProps {
    trucks: any;
    actions: {
        trucks: any;
    };
}

interface IState {
    totalItems: number;
    currentPage: number;
}

export class Paginator extends React.Component<IProps, IState> {

    state = {
        totalItems: 0,
        currentPage: 0,
    };

    constructor(props: any) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.trucks.listTrucks.length > 0) {
            this.setState({
                totalItems: nextProps.trucks.listTrucks.length,
                currentPage: nextProps.trucks.currentPage,
            });
        }
    }

    changeCurrentPage(type: string, num?: number) {
        switch (type) {
            case '': {
                this.props.actions.trucks.changeCurrentPage(num);
                break;
            }
            case 'pre': {
                if (this.state.currentPage > 1) {
                    this.props.actions.trucks.changeCurrentPage(this.state.currentPage - 1);
                }
                break;
            }
            case 'nxt': {
                const totalItems = this.state.totalItems;
                const perPages = configData['pagination']['perPages'];
                const totalPages = Math.ceil(totalItems / perPages);
                if (this.state.currentPage < totalPages) {
                    this.props.actions.trucks.changeCurrentPage(this.state.currentPage + 1);
                }
                break;
            }
            default: {
                break;
            }
        }
    }

    renderPages() {
        const totalItems = this.state.totalItems;
        const currentPage = this.state.currentPage;
        const perPages = configData['pagination']['perPages'];
        const totalPages = Math.ceil(totalItems / perPages);
        const pages = [];

        for (let i = 0; i < totalPages; i++) {
            pages.push(
                <li 
                    className="page-item" 
                    key={i} 
                    onClick={() => this.changeCurrentPage('', i + 1)}
                >
                    <a className={"page-link " + (((i + 1) === currentPage) ? 'current-page' : '')}>{i + 1}</a>
                </li>,
            );
        }

        return pages;
    }

    render() {
        return (
            <div className="paginator">
                <nav>
                    <ul className="pagination">
                        <li className="page-item" onClick={() => this.changeCurrentPage('pre')}>
                            <a className="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">{i18n.t('PREVIOUS')}</span>
                            </a>
                        </li>

                        {this.renderPages()}

                        <li className="page-item" onClick={() => this.changeCurrentPage('nxt')}>
                            <a className="page-link" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">{i18n.t('NEXT')}</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }

}
