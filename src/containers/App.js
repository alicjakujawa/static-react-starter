import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import TranslatedComponent from '../components/TranslatedComponent';
import en from 'react-intl/locale-data/en';
import pl from 'react-intl/locale-data/pl';
import plMessages from '../../l10n/pl.json';
import enMessages from '../../l10n/en.json';

addLocaleData([...pl, ...en]);

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.handleLangChange = this.handleLangChange.bind(this);
    this.state = {
      lang: 'pl',
      messages: plMessages,
    };
  }

  handleLangChange(event){
    const lang = event.target.value;
    switch(lang){
      case 'pl':
        return this.setState({ lang, messages: plMessages});
      default:
        return this.setState({ lang, messages: enMessages});
    }
  }

  render() {
    const { lang, messages } = this.state;
    return (
      <div>
        <select value={lang} onChange={this.handleLangChange}>
          <option value="pl">Polish</option>
          <option value="en">English</option>
        </select>
        <IntlProvider locale={ lang } messages={ messages }>
          <TranslatedComponent {...this.props} />
        </IntlProvider>
      </div>
    );
  }
}
