// FormSelectInput
import './Form.styles.css'
// STYLES
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';

/** TEXT INPUT **/
export const FormTextInput = ({ className, errors, onChange, label, id, disabled, type, ...otherProps }: any) => (
    <div>
        <label htmlFor={id} className={`form-input-label ${errors && 'form-input-label--error'} ${disabled && 'form-input--disabled'}`} style={{ marginLeft: 10 }} >
            {label}
        </label>
        <input id={id} type={type} className={`form-input ${errors && 'form-input--error'}`} onChange={onChange} {...otherProps} disabled={disabled} />
        {errors && (<p style={{ position: 'absolute', color: 'var(--red)', fontSize: 11 }} >*{errors}</p>)}
        {errors && <ErrorOutlineRoundedIcon style={{ position: 'absolute', fill: 'var(--red)', right: 30, top: 38, fontSize: 20 }} />}
    </div>
)

