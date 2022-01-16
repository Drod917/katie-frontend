import CMS from 'netlify-cms-app'
import ServiceItemStyle from "components/ServiceItem.scss";
import SectionHeaderStyle from "components/SectionHeader.scss";
import PageSectionStyle from "components/PageSection.scss";

import ServicesPreview from './preview-templates/ServicesPreview'

const styles = { ServiceItemStyle, SectionHeaderStyle, PageSectionStyle }

CMS.registerPreviewStyle(styles)

CMS.registerPreviewTemplate('services', ServicesPreview)
