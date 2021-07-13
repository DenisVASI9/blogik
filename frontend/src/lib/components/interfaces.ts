import React from "react";

export type Controller<ViewProps, ControllerProps> = React.FC<{
    View: React.FC<ViewProps>
} & ControllerProps>