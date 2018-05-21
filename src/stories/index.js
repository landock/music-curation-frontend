import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/skipWhile';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/first';

import 'semantic-ui-css/semantic.min.css';

import '../components/App/App.story';

import '../components/CurationsCollection/CurationsCollection.story';
import '../components/Curation/Curation.story';
import '../components/CurationScheduler/CurationScheduler.story';

import '../components/EditCuration/EditCuration.story';
import '../components/PublicationStatusEditor/PublicationStatusEditor.story';
import '../components/ModifyCuration/ModifyCuration.story';

import '../components/TagCollection/TagCollection.story';
import '../components/Tag/Tag.story';

import '../components/SearchResultCollection/SearchResultCollection.story';
import '../components/SearchResultCard/SearchResultCard.story';
import '../components/AddTags/AddTags.story';
import '../components/AddToCuration/AddToCuration.story';

import '../components/CurationSearchBar/CurationSearchBar.story';
import '../components/CurationFilterSubHeader/CurationFilterSubHeader.story';
import '../components/SearchResultFilterSubHeader/SearchResultFilterSubHeader.story';
import '../components/BulkCurationEditor/BulkCurationEditor.story';
