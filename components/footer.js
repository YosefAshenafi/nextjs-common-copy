import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter, fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { YEAR_CREATED } from '../constants/date';
import { FACEBOOK, TWITTER } from '../constants/footer_links';
import { COMPANY_NAME } from '../constants/seo';
import css from '../styles/footer.module.scss';
import BuildCopyrightYears from './buildCopyrightYears';

library.add(fab, faFacebookF, faTwitter);

export default function Footer({ yearCreated=YEAR_CREATED, companyName=COMPANY_NAME }) {

    return (
        <>
            <footer className={css.footer}>
                <div className={css.socialmedia}>
                    <div className={css.facebook}>
                        <a
                            href={FACEBOOK.url}
                            title={FACEBOOK.title}
                            target={FACEBOOK.target}
                        >
                            <div className={css.icon}>
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                            </div>
                        </a>
                    </div>
                    <div className={css.twitter}>
                        <a
                            href={TWITTER.url}
                            title={TWITTER.title}
                            target={TWITTER.target}
                        >
                            <div className={css.icon}>
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </div>
                        </a>
                    </div>
                </div>
                <div className={css.copyright}>
                    <p>
                        &copy; {companyName} {BuildCopyrightYears(yearCreated)}
                    </p>
                </div>
            </footer>
        </>
    );
}
