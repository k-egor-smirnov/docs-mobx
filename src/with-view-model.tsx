import { ComponentProps, ComponentType } from "react";
import { InjectionToken, container } from "tsyringe";
import { constructor } from "tsyringe/dist/typings/types";

export function withViewModel<ViewModelType extends constructor<unknown>>(
  ViewModel: ViewModelType,
  WrappedComponent: ComponentType<unknown & { vm: InstanceType<ViewModelType> }>
) {
  return function WithViewModelComponent(
    props: Omit<ComponentProps<typeof WrappedComponent>, "vm"> & {
      vm?: InstanceType<ViewModelType>;
    }
  ) {
    return (
      <WrappedComponent
        {...props}
        vm={
          (props.vm ??
            container.resolve(
              ViewModel as InjectionToken
            )) as InstanceType<ViewModelType>
        }
      />
    );
  };
}
