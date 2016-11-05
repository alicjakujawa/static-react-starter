import React from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';
import styles from './style.sass';

const translations = defineMessages({
  predefinedTranslation: {
    id: 'PREDEFINED',
    defaultMessage: 'Finally super basic boilerplate',
    description: 'This translation is defined in a defineMessage.',
  }
});

export default class TranslatedComponent extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>
          <FormattedMessage
            id='INLINE'
            defaultMessage='Static react starter'
            description='This translation is created inline of the code'
          />
        </h1>
        <p className={styles.content}>
          <FormattedMessage
            {...translations.predefinedTranslation}
            values={ { name: 'World' } }
          />
        </p>
      </div>
    )
  }
}
