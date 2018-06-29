import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import 'semantic-ui-css/semantic.min.css';

import '../components/App/App.story';
import '../components/Curation/Curation.story';
import '../components/CurationsCollection/CurationsCollection.story';
import '../components/PublicationStatusEditor/PublicationStatusEditor.story';
import '../components/EditCurationView/EditCurationView.story';
import '../components/ModifyCuration/ModifyCuration.story';
import '../components/Tag/Tag.story';
import '../components/TagCollection/TagCollection.story';
import '../components/SearchResultCollection/SearchResultCollection.story';
import '../components/AddTags/AddTags.story';
import '../components/AddToCuration/AddToCuration.story';
import '../components/CurationFilterSubHeader/CurationFilterSubHeader.story';
import '../components/SearchResultFilterSubHeader/SearchResultFilterSubHeader.story';
import '../components/BulkCurationEditor/BulkCurationEditor.story';
import '../components/CurationSchedulerView/CurationSchedulerView.story';
