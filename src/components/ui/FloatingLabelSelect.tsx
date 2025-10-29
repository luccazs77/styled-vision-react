import { SelectHTMLAttributes, forwardRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface FloatingLabelSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
}

const FloatingLabelSelect = forwardRef<HTMLSelectElement, FloatingLabelSelectProps>(
  ({ className, label, options, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
    };

    return (
      <div className="relative w-full">
        {(isFocused || hasValue || props.value) ? (
          <fieldset
            className={cn(
              "relative border-2 rounded-lg transition-all duration-200 border-primary"
            )}
          >
            <legend className="ml-3 px-1 text-xs text-primary">
              {label}
            </legend>
            <select
              ref={ref}
              className={cn(
                "w-full appearance-none bg-transparent px-4 pb-3 pt-1 pr-10 text-base text-foreground outline-none",
                "disabled:cursor-not-allowed disabled:opacity-50",
                className
              )}
              onFocus={handleFocus}
              onBlur={handleBlur}
              {...props}
            >
              <option value="" disabled>Place holder</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
          </fieldset>
        ) : (
          <div className="relative border-2 border-input rounded-lg">
            <select
              ref={ref}
              className={cn(
                "w-full appearance-none bg-transparent px-4 py-3 pr-10 text-base text-foreground outline-none",
                "disabled:cursor-not-allowed disabled:opacity-50",
                className
              )}
              onFocus={handleFocus}
              onBlur={handleBlur}
              {...props}
            >
              <option value="" disabled selected>Place holder</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <label className="absolute left-1 -top-5 -translate-y-1/2 text-muted-foreground pointer-events-none">
              {label}
            </label>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
          </div>
        )}
      </div>
    );
  }
);

FloatingLabelSelect.displayName = "FloatingLabelSelect";

export { FloatingLabelSelect };
