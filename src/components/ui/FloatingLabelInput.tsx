import { InputHTMLAttributes, forwardRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface FloatingLabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
}

const FloatingLabelInput = forwardRef<HTMLInputElement, FloatingLabelInputProps>(
  ({ className, label, helperText, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
    };

    return (
      <div className="relative w-full">
        {(isFocused || hasValue || props.value) ? (
          <fieldset
            className={cn(
              "relative border-2 rounded-lg transition-all duration-900 border-primary"
            )}
          >
            <legend className="ml-3 px-1 text-xs text-primary">
              {label}
            </legend>
            <input
              ref={ref}
              className={cn(
                "w-full bg-transparent px-4 pb-3 pt-1 text-base text-foreground outline-none",
                "placeholder:text-muted-foreground",
                "disabled:cursor-not-allowed disabled:opacity-50",
                className
              )}
              placeholder="Place holder"
              onFocus={handleFocus}
              onBlur={handleBlur}
              {...props}
            />
          </fieldset>
        ) : (
          <div className="relative border-2 border-input rounded-lg">
            <input
              ref={ref}
              className={cn(
                "w-full bg-transparent px-4 py-3 text-base text-foreground outline-none",
                "placeholder-transparent",
                "disabled:cursor-not-allowed disabled:opacity-50",
                className
              )}
              placeholder=" "
              onFocus={handleFocus}
              onBlur={handleBlur}
              {...props}
            />
            <label className="absolute left-1 -top-5 -translate-y-1/2 text-muted-foreground pointer-events-none">
              {label}
            </label>
          </div>
        )}
        {helperText && (
          <p className="mt-1 text-xs text-muted-foreground ml-4">{helperText}</p>
        )}
      </div>
    );
  }
);

FloatingLabelInput.displayName = "FloatingLabelInput";

export { FloatingLabelInput };
