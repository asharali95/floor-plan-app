import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from '../sidebar/panel';
import CatalogList from '../catalog-view/catalog-list';

const tabStyle = { margin: '1em' };

const iconStyle = {
  fontSize: '14px',
  margin: '2px',
  cursor: 'pointer'
};

const addGuideStyle = {
  cursor: 'pointer',
  height: '2em'
};

const tableTabStyle = {
  width: '100%',
  textAlign: 'center'
};

export default class CatalogPanel extends Component {
   constructor(props, context) {
    super(props);
    let page = props.state.catalog.page;
    let currentCategory = context.catalog.getCategory(page);
    let categoriesToDisplay = currentCategory.categories;
    let elementsToDisplay = currentCategory.elements.filter(element => element.info.visibility ? element.info.visibility.catalog : true );

    this.state = {
      categories: currentCategory.categories,
      elements: elementsToDisplay,
      matchString: '',
      matchedElements: []
    };
  }

    flattenCategories( categories ) {
    let toRet = [];

    for( let x = 0; x < categories.length; x++ )
    {
      let curr = categories[x];
      toRet = toRet.concat( curr.elements );
      if( curr.categories.length ) toRet = toRet.concat( this.flattenCategories ( curr.categories ) );
    }

    return toRet;
  }

  matcharray( text ) {

    let array = this.state.elements.concat( this.flattenCategories( this.state.categories ) );

    let filtered = [];

    if( text != '' ) {
      let regexp = new RegExp( text, 'i');
      for (let i = 0; i < array.length; i++) {
        if (regexp.test(array[i].info.title)) {
          filtered.push(array[i]);
        }
      }
    }

    this.setState({
      matchString: text,
      matchedElements: filtered
    });
  };

  select( element ) {

    switch (element.prototype) {
      case 'lines':
        this.context.linesActions.selectToolDrawingLine(element.name);
        break;
      case 'items':
        this.context.itemsActions.selectToolDrawingItem(element.name);
        break;
      case 'holes':
        this.context.holesActions.selectToolDrawingHole(element.name);
        break;
    }

    this.context.projectActions.pushLastSelectedCatalogElementToHistory(element);
  }

       select(elem) {
    let element = elem;

    switch (element.prototype) {
      case 'lines':
        this.context.linesActions.selectToolDrawingLine(element.name);
        break;
      case 'items':
        this.context.itemsActions.selectToolDrawingItem(element.name);
        break;
      case 'holes':
        this.context.holesActions.selectToolDrawingHole(element.name);
        break;
    }

    this.context.projectActions.pushLastSelectedCatalogElementToHistory(element);
  }

  render() {
        let page = this.props.state.catalog.page;
    let currentCategory = this.context.catalog.getCategory(page);
    let categoriesToDisplay = currentCategory.categories;
    let elementsToDisplay = currentCategory.elements.filter(element => element.info.visibility ? element.info.visibility.catalog : true );
        if (page !== 'root') {

      let breadcrumbsNames = [];

      this.props.state.catalog.path.forEach(pathName => {
        breadcrumbsNames.push({
          name: this.context.catalog.getCategory(pathName).label,
          action: () => projectActions.goBackToCatalogPage(pathName)
        });
      });

      breadcrumbsNames.push({name: currentCategory.label, action: ''});

      breadcrumbComponent = (<CatalogBreadcrumb names={breadcrumbsNames}/>);
    }

    let pathSize = this.props.state.catalog.path.size;
    let breadcrumbComponent = null;
    let { state } = this.props;
    let { projectActions, translator } = this.context;
    // let { guides } = state.scene;

    return (
      <Panel name={translator.t('Catalog')}>
        <div style={{width:"100%", height:"100%", display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
       {elementsToDisplay.map(elem => <div style={{ boxSizing:"border-box",margin:"15px",width:"calc(33.33% - 10px)"}} onClick={()=>{this.select(elem)}} key={elem.name}>{elem.info.title}</div>)}
        </div>

      </Panel>
    );
  }
}

CatalogPanel.propTypes = {
  state: PropTypes.object.isRequired
};

CatalogPanel.contextTypes = {
  catalog: PropTypes.object.isRequired,
  translator: PropTypes.object.isRequired,
  itemsActions: PropTypes.object.isRequired,
  linesActions: PropTypes.object.isRequired,
  holesActions: PropTypes.object.isRequired,
  projectActions: PropTypes.object.isRequired
};
