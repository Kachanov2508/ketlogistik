import Link from 'next/link';
import classes from './Button.module.scss';

const Button = ({ link, text, width }) => {
  return (
            <Link href={link}>
                <div className={classes.button} style={{ width: width || '200px' }}>
                    {text}
                </div>
            </Link>
    )

}

export default Button