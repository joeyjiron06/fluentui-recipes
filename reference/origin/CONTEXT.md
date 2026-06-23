# CONTEXT - Origin Component Reference

This folder contains reference source code from [cosscom/coss](https://github.com/cosscom/coss) `apps/origin` — a component showcase/registry app built with shadcn/ui patterns. Website at https://coss.com/origin

## How These Files Work Together

### `config/components.ts`

Defines the **component categories** and maps each category to its constituent component files (e.g., `comp-01`, `comp-02`, etc.). Each category has a `name`, `slug`, and array of component references.

### `registry.json`

A shadcn-compatible registry manifest that declares UI primitives (accordion, alert-dialog, button, etc.) along with their dependencies, file paths, and Tailwind config extensions. This is what the CLI uses to install components.

### `registry/default/components/`

Individual component recipe files (`comp-XX.tsx`). Each demonstrates a specific usage pattern or variant of a UI component. These are the actual "recipes" shown in the showcase.

### `registry/default/ui/`

Base UI primitives (accordion.tsx, button.tsx, etc.) that the recipe components import from. Built on top of Radix UI and styled with Tailwind CSS.

---

## Component Categories

### Accordion

| Status | Source File  | Fluent File | Description                         |
| ------ | ------------ | ----------- | ----------------------------------- |
| -      | comp-334.tsx |             | W/ chevron                          |
| -      | comp-335.tsx |             | W/ plus-minus                       |
| -      | comp-336.tsx |             | W/ left chevron                     |
| -      | comp-337.tsx |             | W/ left plus-minus                  |
| -      | comp-338.tsx |             | W/ icon and chevron                 |
| -      | comp-339.tsx |             | W/ icon and plus-minus              |
| -      | comp-340.tsx |             | W/ sub-header and chevron           |
| -      | comp-341.tsx |             | W/ sub-header and plus-minus        |
| -      | comp-342.tsx |             | W/ icon, sub-header, and chevron    |
| -      | comp-343.tsx |             | W/ icon, sub-header, and plus-minus |
| -      | comp-344.tsx |             | Tabs w/ chevron                     |
| -      | comp-345.tsx |             | Tabs w/ plus-minus                  |
| -      | comp-346.tsx |             | Tabs w/ left chevron                |
| -      | comp-347.tsx |             | Tabs w/ left plus-minus             |
| -      | comp-348.tsx |             | Table w/ chevron                    |
| -      | comp-349.tsx |             | Table w/ plus-minus                 |
| -      | comp-350.tsx |             | Table w/ left chevron               |
| -      | comp-351.tsx |             | Table w/ left plus-minus            |
| -      | comp-352.tsx |             | Multi-level                         |
| -      | comp-353.tsx |             | Multi-level w/ icon                 |

### Alert

| Status | Source File  | Fluent File | Description                             |
| ------ | ------------ | ----------- | --------------------------------------- |
| -      | comp-267.tsx |             | Warning with icon                       |
| -      | comp-268.tsx |             | Warning with icon                       |
| -      | comp-269.tsx |             | Error with icon                         |
| -      | comp-270.tsx |             | Error with icon                         |
| -      | comp-271.tsx |             | Success with icon                       |
| -      | comp-272.tsx |             | Success with icon                       |
| -      | comp-273.tsx |             | Info with icon                          |
| -      | comp-274.tsx |             | Info with icon                          |
| -      | comp-275.tsx |             | Warning with icon                       |
| -      | comp-276.tsx |             | Warning with icon                       |
| -      | comp-277.tsx |             | Error, Signup, Authentication with icon |
| -      | comp-278.tsx |             | Error, Signup, Authentication with icon |

### Avatar

| Status | Source File  | Fluent File | Description                          |
| ------ | ------------ | ----------- | ------------------------------------ |
| -      | comp-390.tsx |             | User, Profile                        |
| -      | comp-391.tsx |             | User, Profile                        |
| -      | comp-392.tsx |             | User, Profile with icon              |
| -      | comp-393.tsx |             | User, Profile                        |
| -      | comp-394.tsx |             | User, Profile, Status                |
| -      | comp-395.tsx |             | User, Profile, Status                |
| -      | comp-396.tsx |             | User, Profile, Status                |
| -      | comp-397.tsx |             | User, Profile, Badge, Chip with icon |
| -      | comp-398.tsx |             | User, Profile, Badge, Chip           |
| -      | comp-399.tsx |             | User, Profile, Badge, Chip           |
| -      | comp-400.tsx |             | User, Profile                        |
| -      | comp-401.tsx |             | Avatar group                         |
| -      | comp-402.tsx |             | Avatar group                         |
| -      | comp-403.tsx |             | Avatar group                         |
| -      | comp-404.tsx |             | Avatar group                         |
| -      | comp-405.tsx |             | Avatar group                         |
| -      | comp-406.tsx |             | Avatar group                         |
| -      | comp-407.tsx |             | Avatar group                         |
| -      | comp-408.tsx |             | Avatar group                         |
| -      | comp-409.tsx |             | Avatar group (secondary, icon)       |
| -      | comp-410.tsx |             | Avatar group                         |
| -      | comp-411.tsx |             | Avatar group                         |
| -      | comp-412.tsx |             | Avatar group                         |

### Badge

| Status | Source File  | Fluent File | Description              |
| ------ | ------------ | ----------- | ------------------------ |
| -      | comp-413.tsx |             | Chip                     |
| -      | comp-414.tsx |             | Chip                     |
| -      | comp-415.tsx |             | Chip with icon           |
| -      | comp-416.tsx |             | Chip, Counter            |
| -      | comp-417.tsx |             | Chip                     |
| -      | comp-418.tsx |             | Chip, Counter            |
| -      | comp-419.tsx |             | Chip, Status with icon   |
| -      | comp-420.tsx |             | Chip, Status             |
| -      | comp-421.tsx |             | Chip, Status             |
| -      | comp-422.tsx |             | Chip, Status             |
| -      | comp-423.tsx |             | Chip, Checkbox with icon |
| -      | comp-424.tsx |             | Chip with icon           |
| -      | comp-425.tsx |             | Chip, Tag with icon      |

### Banner

| Status | Source File  | Fluent File | Description                          |
| ------ | ------------ | ----------- | ------------------------------------ |
| -      | comp-301.tsx |             | Cookies, Gdpr, Privacy (outline, sm) |
| -      | comp-302.tsx |             | Group variant                        |
| -      | comp-303.tsx |             | With icon                            |
| -      | comp-304.tsx |             | Group variant                        |
| -      | comp-305.tsx |             | Ghost variant with icon              |
| -      | comp-306.tsx |             | Outline variant (sm) with icon       |
| -      | comp-307.tsx |             | Link variant (sm) with icon          |
| -      | comp-308.tsx |             | Ghost variant (sm) with icon         |
| -      | comp-309.tsx |             | Ghost variant (sm) with icon         |
| -      | comp-310.tsx |             | Countdown, Sale (ghost, sm)          |
| -      | comp-311.tsx |             | Newsletter, Subscribe                |
| -      | comp-312.tsx |             | Outline variant (sm) with icon       |

### Breadcrumb

| Status | Source File  | Fluent File | Description               |
| ------ | ------------ | ----------- | ------------------------- |
| -      | comp-446.tsx |             | Radix                     |
| -      | comp-447.tsx |             | Dropdown, Radix with icon |
| -      | comp-448.tsx |             | Radix with icon           |
| -      | comp-449.tsx |             | Radix with icon           |
| -      | comp-450.tsx |             | Radix with icon           |
| -      | comp-451.tsx |             | Radix with icon           |
| -      | comp-452.tsx |             | Radix with icon           |
| -      | comp-453.tsx |             | Select, Radix with icon   |

### Button

| Status | Source File  | Fluent File | Description                                   |
| ------ | ------------ | ----------- | --------------------------------------------- |
| -      | comp-78.tsx  |             | "Button" button                               |
| -      | comp-79.tsx  |             | Disabled                                      |
| -      | comp-80.tsx  |             | "Button" button                               |
| -      | comp-81.tsx  |             | With icon                                     |
| -      | comp-82.tsx  |             | Delete with icon                              |
| -      | comp-83.tsx  |             | Secondary variant with icon                   |
| -      | comp-84.tsx  |             | Outline variant with icon                     |
| -      | comp-85.tsx  |             | Back with icon                                |
| -      | comp-86.tsx  |             | Next with icon                                |
| -      | comp-87.tsx  |             | Secondary variant with icon                   |
| -      | comp-88.tsx  |             | Dropdown with icon                            |
| -      | comp-89.tsx  |             | Ghost variant                                 |
| -      | comp-90.tsx  |             | Loading with icon                             |
| -      | comp-91.tsx  |             | Loading with icon                             |
| -      | comp-92.tsx  |             | Counter                                       |
| -      | comp-93.tsx  |             | Kbd with icon                                 |
| -      | comp-94.tsx  |             | User, Avatar, Profile                         |
| -      | comp-95.tsx  |             | User, Avatar, Profile, Dropdown with icon     |
| -      | comp-96.tsx  |             | Outline variant with icon                     |
| -      | comp-97.tsx  |             | Outline variant (icon) with icon              |
| -      | comp-98.tsx  |             | Menu (outline, icon)                          |
| -      | comp-99.tsx  |             | Tooltip (outline, icon)                       |
| -      | comp-100.tsx |             | Menu, Hamburger (outline, icon)               |
| -      | comp-101.tsx |             | Toggle with icon                              |
| -      | comp-129.tsx |             | Dropdown, Notification (outline, icon)        |
| -      | comp-130.tsx |             | Toggle, Darkmode with icon                    |
| -      | comp-102.tsx |             | Vote, Counter (outline, icon)                 |
| -      | comp-103.tsx |             | Vote, Counter with icon                       |
| -      | comp-104.tsx |             | Volume, Controls (outline, icon)              |
| -      | comp-105.tsx |             | Copy (outline, icon)                          |
| -      | comp-106.tsx |             | Toggle group (outline, icon)                  |
| -      | comp-107.tsx |             | Toggle group with icon                        |
| -      | comp-108.tsx |             | Toggle group, Dropdown (outline, icon)        |
| -      | comp-109.tsx |             | Toggle group                                  |
| -      | comp-110.tsx |             | Toggle group                                  |
| -      | comp-111.tsx |             | Size: icon                                    |
| -      | comp-112.tsx |             | Outline variant (icon) with icon              |
| -      | comp-113.tsx |             | Dropdown with icon                            |
| -      | comp-114.tsx |             | Dropdown, Counter with icon                   |
| -      | comp-131.tsx |             | Dropdown with icon                            |
| -      | comp-115.tsx |             | Previous with icon                            |
| -      | comp-116.tsx |             | Next with icon                                |
| -      | comp-117.tsx |             | Like, Counter with icon                       |
| -      | comp-118.tsx |             | Like, Counter with icon                       |
| -      | comp-119.tsx |             | Social, Login, Authentication (outline, icon) |
| -      | comp-120.tsx |             | Social, Login, Authentication (outline, icon) |
| -      | comp-121.tsx |             | Social, Login, Authentication                 |
| -      | comp-122.tsx |             | Social, Login, Authentication                 |
| -      | comp-123.tsx |             | Collapsible with icon                         |
| -      | comp-124.tsx |             | Back with icon                                |
| -      | comp-125.tsx |             | With icon                                     |
| -      | comp-126.tsx |             | Outline variant (icon) with icon              |
| -      | comp-127.tsx |             | Outline variant (icon) with icon              |
| -      | comp-128.tsx |             | Outline variant with icon                     |

### Calendar & Date picker

| Status | Source File  | Fluent File | Description                                                                |
| ------ | ------------ | ----------- | -------------------------------------------------------------------------- |
| -      | comp-487.tsx |             | Calendar, Date, React aria                                                 |
| -      | comp-488.tsx |             | Calendar, Range calendar, Date, React aria                                 |
| -      | comp-489.tsx |             | Calendar, Range calendar, Date, Disabled, React aria                       |
| -      | comp-490.tsx |             | Calendar, Date, React daypicker                                            |
| -      | comp-491.tsx |             | Calendar, Range calendar, Date, React daypicker                            |
| -      | comp-492.tsx |             | Calendar, Range calendar, Date, Disabled, React daypicker                  |
| -      | comp-493.tsx |             | Calendar, Date, React daypicker                                            |
| -      | comp-494.tsx |             | Calendar, Date, React daypicker                                            |
| -      | comp-495.tsx |             | Calendar, Range calendar, Date, React daypicker                            |
| -      | comp-496.tsx |             | Calendar, Date, React daypicker                                            |
| -      | comp-497.tsx |             | Calendar, Date, React daypicker                                            |
| -      | comp-498.tsx |             | Calendar, Date, React daypicker                                            |
| -      | comp-499.tsx |             | Calendar, Date, Week, React daypicker                                      |
| -      | comp-500.tsx |             | Calendar, Date, Button, React daypicker (outline, sm)                      |
| -      | comp-501.tsx |             | Calendar, Date, Button, React daypicker (outline, sm)                      |
| -      | comp-502.tsx |             | Calendar, Date, Input, React daypicker with icon                           |
| -      | comp-503.tsx |             | Calendar, Date, Input, Time, React daypicker with icon                     |
| -      | comp-504.tsx |             | Calendar, Date, Collapsible, React daypicker, Radix (ghost, sm)            |
| -      | comp-505.tsx |             | Calendar, Date, Time, Button, React daypicker                              |
| -      | comp-506.tsx |             | Calendar, Date, Button, React daypicker (ghost, sm)                        |
| -      | comp-507.tsx |             | Calendar, Range calendar, Date, Button, React daypicker (ghost, sm)        |
| -      | comp-508.tsx |             | Calendar, Range calendar, Date, React daypicker                            |
| -      | comp-509.tsx |             | Calendar, Range calendar, Date, React daypicker                            |
| -      | comp-510.tsx |             | Calendar, Date, React daypicker                                            |
| -      | comp-41.tsx  |             | Input, Label, Date, Calendar, Picker, React aria with icon                 |
| -      | comp-42.tsx  |             | Input, Label, Date, Calendar, Range calendar, Picker, React aria with icon |
| -      | comp-511.tsx |             | Calendar, Date, Button, Picker, React daypicker with icon                  |
| -      | comp-512.tsx |             | Calendar, Date, Button, Picker, React daypicker with icon                  |

### Checkbox

| Status | Source File  | Fluent File | Description                              |
| ------ | ------------ | ----------- | ---------------------------------------- |
| -      | comp-132.tsx |             | Label, Radix                             |
| -      | comp-133.tsx |             | Label, Radix                             |
| -      | comp-134.tsx |             | Label, Radix                             |
| -      | comp-135.tsx |             | Label, Disabled, Radix                   |
| -      | comp-136.tsx |             | Label, Radix                             |
| -      | comp-137.tsx |             | Label, Radix                             |
| -      | comp-138.tsx |             | Label, Login, Authentication, Radix      |
| -      | comp-139.tsx |             | Label, Radix                             |
| -      | comp-151.tsx |             | Label, Radix                             |
| -      | comp-140.tsx |             | Label, Radix                             |
| -      | comp-141.tsx |             | Label, Radix                             |
| -      | comp-142.tsx |             | Label, Collapsible, Radix                |
| -      | comp-143.tsx |             | Label, Radix                             |
| -      | comp-144.tsx |             | Label, Card, Radix                       |
| -      | comp-145.tsx |             | Label, Card, Radix with icon             |
| -      | comp-146.tsx |             | Label, Card, Radix with icon             |
| -      | comp-147.tsx |             | Label, Card, Radix with icon             |
| -      | comp-148.tsx |             | Label, Tree, Radix                       |
| -      | comp-149.tsx |             | Label, Week, Calendar, Radix             |
| -      | comp-150.tsx |             | Label, Toggle, Darkmode, Radix with icon |

### Image Cropper

| Status | Source File  | Fluent File | Description                    |
| ------ | ------------ | ----------- | ------------------------------ |
| -      | comp-554.tsx |             | Ghost variant (icon) with icon |
| -      | comp-555.tsx |             | Image, Crop, Zoom              |
| -      | comp-556.tsx |             | Image, Crop, Zoom              |
| -      | comp-557.tsx |             | Image, Crop, Zoom              |
| -      | comp-558.tsx |             | Image, Crop, Zoom              |
| -      | comp-559.tsx |             | Image, Crop, Zoom              |
| -      | comp-560.tsx |             | Image, Crop, Zoom              |
| -      | comp-561.tsx |             | Image, Crop, Zoom, Slider      |
| -      | comp-562.tsx |             | Image, Crop, Zoom              |
| -      | comp-563.tsx |             | Image, Crop, Zoom              |
| -      | comp-564.tsx |             | Image, Crop, Zoom              |

### Dialog

| Status | Source File  | Fluent File | Description                                                                     |
| ------ | ------------ | ----------- | ------------------------------------------------------------------------------- |
| -      | comp-313.tsx |             | Modal, Alert, Alert dialog, Radix                                               |
| -      | comp-314.tsx |             | Modal, Alert, Alert dialog, Radix with icon                                     |
| -      | comp-315.tsx |             | Modal, Radix                                                                    |
| -      | comp-316.tsx |             | Modal, Radix                                                                    |
| -      | comp-317.tsx |             | Modal, Radix                                                                    |
| -      | comp-318.tsx |             | Modal, Radix                                                                    |
| -      | comp-319.tsx |             | Modal, Radix                                                                    |
| -      | comp-320.tsx |             | Modal, Delete, Radix with icon                                                  |
| -      | comp-321.tsx |             | Modal, Newsletter, Subscribe, Form, Radix with icon                             |
| -      | comp-322.tsx |             | Modal, Feedback, Form, Radix                                                    |
| -      | comp-323.tsx |             | Modal, Rating, Feedback, Form, Radix                                            |
| -      | comp-324.tsx |             | Modal, Otp, Radix with icon                                                     |
| -      | comp-325.tsx |             | Modal, Signup, Authentication, Form, Radix with icon                            |
| -      | comp-326.tsx |             | Modal, Login, Authentication, Form, Radix with icon                             |
| -      | comp-327.tsx |             | Modal, Form, User, Team, Radix with icon                                        |
| -      | comp-328.tsx |             | Modal, Checkout, Payment, Credit card, Form, Radix with icon                    |
| -      | comp-329.tsx |             | Modal, Checkout, Payment, Credit card, Form, Radix with icon                    |
| -      | comp-330.tsx |             | Modal, User, Radix with icon                                                    |
| -      | comp-331.tsx |             | First name                                                                      |
| -      | comp-332.tsx |             | Modal, Onboarding, Radix with icon                                              |
| -      | comp-333.tsx |             | Modal, Command, Combobox, Popover, Search, Radix, Autocomplete, Radix with icon |

### Dropdown

| Status | Source File  | Fluent File | Description                                  |
| ------ | ------------ | ----------- | -------------------------------------------- |
| -      | comp-366.tsx |             | Radix (ghost, icon)                          |
| -      | comp-367.tsx |             | Radix with icon                              |
| -      | comp-368.tsx |             | Radix with icon                              |
| -      | comp-369.tsx |             | Radix with icon                              |
| -      | comp-370.tsx |             | Radix with icon                              |
| -      | comp-371.tsx |             | Checkbox, Radix with icon                    |
| -      | comp-372.tsx |             | Radio, Radix with icon                       |
| -      | comp-373.tsx |             | Kbd, Delete, Radix with icon                 |
| -      | comp-374.tsx |             | Checkbox, Radio, Delete, Radix with icon     |
| -      | comp-375.tsx |             | User, Profile, Radix (outline, icon)         |
| -      | comp-376.tsx |             | User, Profile, Avatar, Radix (outline, icon) |
| -      | comp-377.tsx |             | User, Avatar, Profile, Radix with icon       |
| -      | comp-378.tsx |             | Info, Radix (ghost, icon)                    |
| -      | comp-379.tsx |             | Text editor, Radix (ghost, icon)             |
| -      | comp-380.tsx |             | Darkmode, Radix (outline, icon)              |

### File upload

| Status | Source File  | Fluent File                   | Description                                                                  |
| ------ | ------------ | ----------------------------- | ---------------------------------------------------------------------------- |
| done   | comp-125.tsx | fileUpload/fileUpload-002.tsx | Avatar image upload button, single file, preview                             |
| done   | comp-126.tsx | fileUpload/fileUpload-010.tsx | Avatar image upload button with outline remove, single file, preview         |
| done   | comp-543.tsx | fileUpload/fileUpload-011.tsx | Avatar image upload with drag & drop, single file, preview                   |
| done   | comp-544.tsx | fileUpload/fileUpload-003.tsx | Drag & drop zone, single file, image preview, error display                  |
| done   | comp-545.tsx | fileUpload/fileUpload-004.tsx | Drag & drop zone with upload button, single file, image preview, error       |
| done   | comp-546.tsx | fileUpload/fileUpload-005.tsx | Drag & drop zone with upload button, multi-file list, image preview, error   |
| done   | comp-547.tsx | fileUpload/fileUpload-007.tsx | Drag & drop zone, multi-file list with formatBytes, image preview, error     |
| done   | comp-548.tsx | fileUpload/fileUpload-001.tsx | Single file upload with paperclip icon, initial file, drag & drop, file info |
| done   | comp-549.tsx | fileUpload/fileUpload-006.tsx | Drag & drop, multi-file list with file icons, error, initial files           |
| done   | comp-550.tsx | fileUpload/fileUpload-008.tsx | Drag & drop, multi-file list with file type icons, formatBytes, error        |
| done   | comp-551.tsx | fileUpload/fileUpload-009.tsx | Drag & drop, multi-file list with download links, preview thumbnails, error  |
| done   | comp-552.tsx | fileUpload/fileUpload-012.tsx | Drag & drop, multi-file list with image grid preview, error                  |
| done   | comp-553.tsx | fileUpload/fileUpload-013.tsx | Drag & drop, multi-file list with upload progress bars, error, clearAll      |
| done   | comp-554.tsx | fileUpload/fileUpload-014.tsx | Full avatar/profile image cropper with drag & drop, error                    |

### Event calendar

| Status | Source File  | Fluent File | Description     |
| ------ | ------------ | ----------- | --------------- |
| -      | comp-542.tsx |             | Default variant |

### Input

| Status | Source File  | Fluent File | Description                                                         |
| ------ | ------------ | ----------- | ------------------------------------------------------------------- |
| -      | comp-01.tsx  |             | Label                                                               |
| -      | comp-02.tsx  |             | Label, Required                                                     |
| -      | comp-03.tsx  |             | Label, Helper                                                       |
| -      | comp-04.tsx  |             | Label, Hint                                                         |
| -      | comp-05.tsx  |             | Label                                                               |
| -      | comp-06.tsx  |             | Label, Error                                                        |
| -      | comp-07.tsx  |             | Label                                                               |
| -      | comp-08.tsx  |             | Label, Disabled                                                     |
| -      | comp-09.tsx  |             | Label with icon                                                     |
| -      | comp-10.tsx  |             | Label with icon                                                     |
| -      | comp-11.tsx  |             | Label                                                               |
| -      | comp-12.tsx  |             | Label                                                               |
| -      | comp-13.tsx  |             | Label                                                               |
| -      | comp-14.tsx  |             | Label                                                               |
| -      | comp-15.tsx  |             | Label                                                               |
| -      | comp-16.tsx  |             | Label                                                               |
| -      | comp-17.tsx  |             | Label, Select, Native select                                        |
| -      | comp-18.tsx  |             | Label, Select, Native select                                        |
| -      | comp-19.tsx  |             | Label, Button with icon                                             |
| -      | comp-20.tsx  |             | Label, Button with icon                                             |
| -      | comp-21.tsx  |             | Label, Button                                                       |
| -      | comp-22.tsx  |             | Label, Button                                                       |
| -      | comp-23.tsx  |             | Label, Button, Password with icon                                   |
| -      | comp-24.tsx  |             | Label, Button with icon                                             |
| -      | comp-25.tsx  |             | Label, Search, Kbd                                                  |
| -      | comp-26.tsx  |             | Label, Button, Search with icon                                     |
| -      | comp-27.tsx  |             | Label, Button, Search with icon                                     |
| -      | comp-28.tsx  |             | Label, Button, Number, React aria with icon                         |
| -      | comp-29.tsx  |             | Label, Button, Number, React aria with icon                         |
| -      | comp-30.tsx  |             | Label, File                                                         |
| -      | comp-31.tsx  |             | Label                                                               |
| -      | comp-32.tsx  |             | Label                                                               |
| -      | comp-33.tsx  |             | Label                                                               |
| -      | comp-34.tsx  |             | Input with character limit                                          |
| -      | comp-35.tsx  |             | Input with characters left                                          |
| -      | comp-36.tsx  |             | Label, Date, React aria                                             |
| -      | comp-37.tsx  |             | Label, Date, React aria                                             |
| -      | comp-38.tsx  |             | Label, Date, React aria with icon                                   |
| -      | comp-39.tsx  |             | Label, Date, React aria with icon                                   |
| -      | comp-40.tsx  |             | Label, Date, React aria                                             |
| -      | comp-41.tsx  |             | Label, Date, Calendar, Picker, React aria with icon                 |
| -      | comp-42.tsx  |             | Label, Date, Calendar, Range calendar, Picker, React aria with icon |
| -      | comp-43.tsx  |             | Label, Date, Calendar, Range calendar, Picker, React aria with icon |
| -      | comp-44.tsx  |             | Label, Otp                                                          |
| -      | comp-45.tsx  |             | Label, Otp with icon                                                |
| -      | comp-58.tsx  |             | Label, Otp                                                          |
| -      | comp-46.tsx  |             | Label, Phone with icon                                              |
| -      | comp-47.tsx  |             | Label, Checkout, Payment, Credit card, Form with icon               |
| -      | comp-48.tsx  |             | Label, Checkout, Payment, Credit card, Form                         |
| -      | comp-49.tsx  |             | Label, Checkout, Payment, Credit card, Form                         |
| -      | comp-50.tsx  |             | Label, Checkout, Payment, Credit card, Form with icon               |
| -      | comp-51.tsx  |             | Label, Password with icon                                           |
| -      | comp-52.tsx  |             | Label, Read only                                                    |
| -      | comp-53.tsx  |             | Label, Copy with icon                                               |
| -      | comp-54.tsx  |             | Label, Mask                                                         |
| -      | comp-55.tsx  |             | Label, Mask, Time                                                   |
| -      | comp-486.tsx |             | Label, Range                                                        |
| -      | comp-56.tsx  |             | Label, Tag, Emblor                                                  |
| -      | comp-57.tsx  |             | Label, Tag, Emblor                                                  |

### Navbar

| Status | Source File  | Fluent File | Description                    |
| ------ | ------------ | ----------- | ------------------------------ |
| -      | comp-577.tsx |             | Navigation (ghost, icon)       |
| -      | comp-578.tsx |             | Ghost variant (icon) with icon |
| -      | comp-579.tsx |             | Ghost variant (icon) with icon |
| -      | comp-580.tsx |             | Ghost variant (icon) with icon |
| -      | comp-581.tsx |             | Ghost variant (icon) with icon |
| -      | comp-582.tsx |             | Ghost variant (icon) with icon |
| -      | comp-583.tsx |             | Ghost variant with icon        |
| -      | comp-584.tsx |             | Ghost variant (icon) with icon |
| -      | comp-585.tsx |             | Ghost variant (icon) with icon |
| -      | comp-586.tsx |             | Ghost variant (sm) with icon   |
| -      | comp-587.tsx |             | Ghost variant (icon) with icon |
| -      | comp-588.tsx |             | Ghost variant (icon) with icon |
| -      | comp-589.tsx |             | Ghost variant (icon) with icon |
| -      | comp-590.tsx |             | Ghost variant (icon) with icon |
| -      | comp-591.tsx |             | Ghost variant (icon) with icon |
| -      | comp-592.tsx |             | Test mode                      |
| -      | comp-593.tsx |             | Outline variant (sm) with icon |
| -      | comp-594.tsx |             | Ghost variant (sm) with icon   |
| -      | comp-595.tsx |             | Navigation (ghost, icon)       |
| -      | comp-596.tsx |             | Navigation (ghost, icon)       |

### Notification

| Status | Source File  | Fluent File | Description                                  |
| ------ | ------------ | ----------- | -------------------------------------------- |
| -      | comp-279.tsx |             | Warning with icon                            |
| -      | comp-280.tsx |             | Error with icon                              |
| -      | comp-281.tsx |             | Success with icon                            |
| -      | comp-282.tsx |             | Info with icon                               |
| -      | comp-283.tsx |             | Warning with icon                            |
| -      | comp-284.tsx |             | Error with icon                              |
| -      | comp-285.tsx |             | Success with icon                            |
| -      | comp-286.tsx |             | Info with icon                               |
| -      | comp-287.tsx |             | Button, Success (ghost, sm)                  |
| -      | comp-288.tsx |             | Success with icon                            |
| -      | comp-289.tsx |             | Button, Warning (ghost, sm)                  |
| -      | comp-290.tsx |             | Button, Error (ghost, sm)                    |
| -      | comp-291.tsx |             | Button, Success (ghost, sm)                  |
| -      | comp-292.tsx |             | Button, Info (ghost, sm)                     |
| -      | comp-293.tsx |             | Button, Cookies, Gdpr, Privacy (outline, sm) |
| -      | comp-294.tsx |             | Button, Info (link, sm)                      |
| -      | comp-295.tsx |             | Button (outline, sm)                         |
| -      | comp-296.tsx |             | Button (ghost, sm)                           |
| -      | comp-297.tsx |             | Outline variant                              |
| -      | comp-298.tsx |             | Toast, Success, Radix (outline, sm)          |
| -      | comp-299.tsx |             | Toast, Sonner, Radix                         |
| -      | comp-300.tsx |             | Toast, Sonner, Success, Radix with icon      |

### Pagination

| Status | Source File  | Fluent File | Description               |
| ------ | ------------ | ----------- | ------------------------- |
| -      | comp-454.tsx |             | Outline variant with icon |
| -      | comp-455.tsx |             | Ghost variant with icon   |
| -      | comp-456.tsx |             | Outline variant with icon |
| -      | comp-457.tsx |             | Disabled state            |
| -      | comp-458.tsx |             | Outline variant           |
| -      | comp-459.tsx |             | Disabled state            |
| -      | comp-460.tsx |             | Disabled state            |
| -      | comp-461.tsx |             | Outline variant with icon |
| -      | comp-462.tsx |             | Disabled state            |
| -      | comp-463.tsx |             | Rows per page             |
| -      | comp-464.tsx |             | Disabled state            |
| -      | comp-465.tsx |             | Go to page                |

### Popover

| Status | Source File  | Fluent File | Description                                |
| ------ | ------------ | ----------- | ------------------------------------------ |
| -      | comp-381.tsx |             | Filter, Radix (outline, icon)              |
| -      | comp-382.tsx |             | Notification, Radix (outline, icon)        |
| -      | comp-383.tsx |             | Notification, User, Radix (outline, icon)  |
| -      | comp-384.tsx |             | Tooltip, Radix (outline, sm)               |
| -      | comp-385.tsx |             | Tooltip, Radix                             |
| -      | comp-386.tsx |             | Tooltip, Radix (outline, icon)             |
| -      | comp-387.tsx |             | Share, Social, Copy, Radix (outline, icon) |
| -      | comp-388.tsx |             | Feedback, Form, Radix (outline, sm)        |
| -      | comp-389.tsx |             | Tour, Radix with icon                      |

### Radio

| Status | Source File  | Fluent File | Description                           |
| ------ | ------------ | ----------- | ------------------------------------- |
| -      | comp-152.tsx |             | Label, Radix                          |
| -      | comp-153.tsx |             | Label, Radix                          |
| -      | comp-154.tsx |             | Label, Radix                          |
| -      | comp-155.tsx |             | Label, Radix                          |
| -      | comp-156.tsx |             | Label, Collapsible, Radix             |
| -      | comp-157.tsx |             | Label, Rating, Radix                  |
| -      | comp-158.tsx |             | Label, Color, Picker, Radix           |
| -      | comp-159.tsx |             | Label, Card, Radix                    |
| -      | comp-160.tsx |             | Label, Card, Radix with icon          |
| -      | comp-161.tsx |             | Label, Card, Radix with icon          |
| -      | comp-162.tsx |             | Label, Card, Radix with icon          |
| -      | comp-163.tsx |             | Label, Card, Checkout, Payment, Radix |
| -      | comp-164.tsx |             | Label, Card, Pricing, Radix           |
| -      | comp-165.tsx |             | Label, Card, Radix                    |
| -      | comp-166.tsx |             | Label, Pricing, Radix                 |
| -      | comp-171.tsx |             | Label, Rating, Vote, Radix            |
| -      | comp-167.tsx |             | Label, Rating, Vote, Radix            |
| -      | comp-168.tsx |             | Label, Rating, Vote, Radix            |
| -      | comp-169.tsx |             | Label, Darkmode, Radix with icon      |
| -      | comp-170.tsx |             | Label, Pricing, Switch, Radix         |

### Select

| Status | Source File  | Fluent File | Description                                                                              |
| ------ | ------------ | ----------- | ---------------------------------------------------------------------------------------- |
| -      | comp-189.tsx |             | Label, Native select                                                                     |
| -      | comp-190.tsx |             | Label, Native select                                                                     |
| -      | comp-191.tsx |             | Label, Native select, Time with icon                                                     |
| -      | comp-192.tsx |             | Label, Native select                                                                     |
| -      | comp-193.tsx |             | Label, Native select                                                                     |
| -      | comp-194.tsx |             | Label, Native select, Error                                                              |
| -      | comp-195.tsx |             | Label, Native select                                                                     |
| -      | comp-196.tsx |             | Label, Native select, Disabled                                                           |
| -      | comp-197.tsx |             | Label, Native select                                                                     |
| -      | comp-198.tsx |             | Label, Native select                                                                     |
| -      | comp-199.tsx |             | Label, Native select                                                                     |
| -      | comp-200.tsx |             | Label, Native select, Timezone, Time                                                     |
| -      | comp-201.tsx |             | Label, Native select                                                                     |
| -      | comp-202.tsx |             | Label, Native select                                                                     |
| -      | comp-203.tsx |             | Label, Radix                                                                             |
| -      | comp-204.tsx |             | Label, Radix                                                                             |
| -      | comp-205.tsx |             | Label, Radix with icon                                                                   |
| -      | comp-206.tsx |             | Label, Helper, Radix                                                                     |
| -      | comp-207.tsx |             | Label, Radix                                                                             |
| -      | comp-208.tsx |             | Label, Radix                                                                             |
| -      | comp-209.tsx |             | Label, Radix                                                                             |
| -      | comp-210.tsx |             | Label, Disabled, Radix                                                                   |
| -      | comp-211.tsx |             | Label, Required, Radix                                                                   |
| -      | comp-212.tsx |             | Label, Radix                                                                             |
| -      | comp-213.tsx |             | Label, Radix                                                                             |
| -      | comp-214.tsx |             | Label, Radix                                                                             |
| -      | comp-215.tsx |             | Label, Disabled, Radix                                                                   |
| -      | comp-216.tsx |             | Label, Radix                                                                             |
| -      | comp-217.tsx |             | Label, Radix                                                                             |
| -      | comp-218.tsx |             | Label, Timezone, Time, Radix                                                             |
| -      | comp-219.tsx |             | Label, Radix                                                                             |
| -      | comp-220.tsx |             | Label, Status, Radix with icon                                                           |
| -      | comp-221.tsx |             | Label, Radix                                                                             |
| -      | comp-222.tsx |             | Label, Radix with icon                                                                   |
| -      | comp-223.tsx |             | Label, Radix with icon                                                                   |
| -      | comp-224.tsx |             | Label, Radix                                                                             |
| -      | comp-225.tsx |             | Label, Flag, Radix with icon                                                             |
| -      | comp-226.tsx |             | Label, User, Avatar, Profile, Radix                                                      |
| -      | comp-227.tsx |             | Label, User, Avatar, Profile, Radix                                                      |
| -      | comp-228.tsx |             | Label, User, Avatar, Profile, Radix                                                      |
| -      | comp-229.tsx |             | Label, Command, Combobox, Popover, Search, Autocomplete, Radix with icon                 |
| -      | comp-230.tsx |             | Label, Command, Combobox, Popover, Search, Autocomplete, Radix with icon                 |
| -      | comp-231.tsx |             | Label, Command, Combobox, Popover, Search, Autocomplete, Timezone, Time, Radix with icon |
| -      | comp-232.tsx |             | Label, Command, Combobox, Popover, Search, Autocomplete, Flag, Radix with icon           |
| -      | comp-233.tsx |             | Label, Command, Combobox, Popover, Search, Autocomplete, Radix with icon                 |
| -      | comp-234.tsx |             | Label, Multiselect, Tag, Input, Search, Autocomplete, Radix                              |
| -      | comp-235.tsx |             | Label, Multiselect, Tag, Input, Search, Autocomplete, Radix                              |
| -      | comp-236.tsx |             | Label, Multiselect, Native select                                                        |
| -      | comp-237.tsx |             | Label, Multiselect, React aria                                                           |
| -      | comp-238.tsx |             | Label, Multiselect, React aria                                                           |
| -      | comp-239.tsx |             | Label, Multiselect, React aria                                                           |

### Slider

| Status | Source File  | Fluent File | Description                                   |
| ------ | ------------ | ----------- | --------------------------------------------- |
| -      | comp-240.tsx |             | Label, Radix                                  |
| -      | comp-241.tsx |             | Label, Disabled, Radix                        |
| -      | comp-242.tsx |             | Label, Radix                                  |
| -      | comp-243.tsx |             | Label, Radix                                  |
| -      | comp-244.tsx |             | Label, Radix                                  |
| -      | comp-245.tsx |             | Label, Radix                                  |
| -      | comp-246.tsx |             | Label, Radix                                  |
| -      | comp-247.tsx |             | Label, Radix                                  |
| -      | comp-248.tsx |             | Label, Radix                                  |
| -      | comp-249.tsx |             | Label, Tooltip, Radix                         |
| -      | comp-250.tsx |             | Range slider, Label, Range, Radix             |
| -      | comp-251.tsx |             | Range slider, Label, Range, Radix             |
| -      | comp-252.tsx |             | Label, Volume, Controls, Radix with icon      |
| -      | comp-253.tsx |             | Range slider, Label, Range, Radix             |
| -      | comp-254.tsx |             | Temperature                                   |
| -      | comp-255.tsx |             | Slider with input                             |
| -      | comp-256.tsx |             | Label, Vote, Rating, Radix                    |
| -      | comp-257.tsx |             | Label, Vote, Rating, Radix                    |
| -      | comp-258.tsx |             | Dual range slider with input                  |
| -      | comp-259.tsx |             | Label, Button, Pricing, Radix (outline, icon) |
| -      | comp-260.tsx |             | Range slider, Label, Button, Radix            |
| -      | comp-261.tsx |             | Vertical slider, Label, Radix                 |
| -      | comp-262.tsx |             | Vertical slider with input                    |
| -      | comp-263.tsx |             | Vertical slider, Range slider, Label, Radix   |
| -      | comp-264.tsx |             | {label}                                       |
| -      | comp-265.tsx |             | Price slider                                  |
| -      | comp-266.tsx |             | Label, Equalizer, Radix                       |

### Stepper

| Status | Source File  | Fluent File | Description                    |
| ------ | ------------ | ----------- | ------------------------------ |
| -      | comp-513.tsx |             | Default variant                |
| -      | comp-514.tsx |             | Default variant                |
| -      | comp-515.tsx |             | With icon                      |
| -      | comp-516.tsx |             | Outline variant                |
| -      | comp-517.tsx |             | Outline variant                |
| -      | comp-518.tsx |             | With icon                      |
| -      | comp-519.tsx |             | Default variant                |
| -      | comp-520.tsx |             | Ghost variant (icon) with icon |
| -      | comp-521.tsx |             | Outline variant                |
| -      | comp-522.tsx |             | Group variant                  |
| -      | comp-523.tsx |             | Default variant                |
| -      | comp-524.tsx |             | Default variant                |
| -      | comp-525.tsx |             | Default variant                |
| -      | comp-526.tsx |             | Vertical stepper               |
| -      | comp-527.tsx |             | Vertical stepper               |
| -      | comp-528.tsx |             | Vertical stepper               |
| -      | comp-529.tsx |             | Vertical stepper               |

### Switch

| Status | Source File  | Fluent File | Description                      |
| ------ | ------------ | ----------- | -------------------------------- |
| -      | comp-172.tsx |             | Radix                            |
| -      | comp-173.tsx |             | Radix                            |
| -      | comp-174.tsx |             | Radix                            |
| -      | comp-175.tsx |             | Radix                            |
| -      | comp-176.tsx |             | Radix                            |
| -      | comp-177.tsx |             | Radix                            |
| -      | comp-178.tsx |             | Radix                            |
| -      | comp-179.tsx |             | Label, Radix                     |
| -      | comp-180.tsx |             | Label, Radix                     |
| -      | comp-181.tsx |             | Label, Darkmode, Radix with icon |
| -      | comp-182.tsx |             | Label, Darkmode, Radix with icon |
| -      | comp-183.tsx |             | Label, Darkmode, Radix with icon |
| -      | comp-184.tsx |             | Switc with icon                  |
| -      | comp-185.tsx |             | Label, Radix                     |
| -      | comp-186.tsx |             | Label, Card, Radix               |
| -      | comp-187.tsx |             | Label, Card, Radix with icon     |
| -      | comp-188.tsx |             | Label, Card, Radix with icon     |

### Table

| Status | Source File  | Fluent File | Description                                                                             |
| ------ | ------------ | ----------- | --------------------------------------------------------------------------------------- |
| -      | comp-466.tsx |             | Default variant                                                                         |
| -      | comp-467.tsx |             | User, Avatar                                                                            |
| -      | comp-468.tsx |             | Default variant                                                                         |
| -      | comp-469.tsx |             | Default variant                                                                         |
| -      | comp-470.tsx |             | Default variant                                                                         |
| -      | comp-471.tsx |             | Default variant                                                                         |
| -      | comp-472.tsx |             | Checkbox                                                                                |
| -      | comp-473.tsx |             | Checkbox, Card                                                                          |
| -      | comp-474.tsx |             | Vertical table                                                                          |
| -      | comp-475.tsx |             | Sticky                                                                                  |
| -      | comp-476.tsx |             | With icon                                                                               |
| -      | comp-477.tsx |             | Tanstack, Checkbox, Badge, Chip, Flag                                                   |
| -      | comp-478.tsx |             | Tanstack, Checkbox, Search, Select, Range, Input, Filter, Sort with icon                |
| -      | comp-479.tsx |             | Tanstack, Flag, Sort, Resize with icon                                                  |
| -      | comp-480.tsx |             | Tanstack, Flag, Sticky, Resize (ghost, icon)                                            |
| -      | comp-481.tsx |             | Tanstack, Flag, Sort, Drag and drop (ghost, icon)                                       |
| -      | comp-482.tsx |             | Tanstack, Checkbox, Collapsible, Flag, Badge, Chip (ghost, icon)                        |
| -      | comp-483.tsx |             | Tanstack, Checkbox, Sort, Flag, Badge, Chip, Pagination (outline, icon)                 |
| -      | comp-484.tsx |             | Outline variant (icon) with icon                                                        |
| -      | comp-485.tsx |             | Tanstack, Checkbox, Sort, Flag, Badge, Chip, Pagination, Filter, Select (outline, icon) |

### Tabs

| Status | Source File  | Fluent File | Description                    |
| ------ | ------------ | ----------- | ------------------------------ |
| -      | comp-426.tsx |             | Radix                          |
| -      | comp-427.tsx |             | Radix                          |
| -      | comp-428.tsx |             | Radix                          |
| -      | comp-429.tsx |             | Radix                          |
| -      | comp-430.tsx |             | Radix                          |
| -      | comp-431.tsx |             | Radix                          |
| -      | comp-432.tsx |             | Radix                          |
| -      | comp-433.tsx |             | Radix with icon                |
| -      | comp-434.tsx |             | Radix with icon                |
| -      | comp-435.tsx |             | Radix with icon                |
| -      | comp-436.tsx |             | Radix with icon                |
| -      | comp-437.tsx |             | Radix with icon                |
| -      | comp-438.tsx |             | Radix with icon                |
| -      | comp-439.tsx |             | Radix                          |
| -      | comp-440.tsx |             | Radix with icon                |
| -      | comp-441.tsx |             | Radix with icon                |
| -      | comp-442.tsx |             | Vertical tabs, Radix           |
| -      | comp-443.tsx |             | Vertical tabs, Radix           |
| -      | comp-444.tsx |             | Vertical tabs, Radix with icon |
| -      | comp-445.tsx |             | Vertical tabs, Radix           |

### Textarea

| Status | Source File | Fluent File | Description                   |
| ------ | ----------- | ----------- | ----------------------------- |
| -      | comp-59.tsx |             | Label                         |
| -      | comp-60.tsx |             | Label, Required               |
| -      | comp-61.tsx |             | Label, Helper                 |
| -      | comp-62.tsx |             | Label, Hint                   |
| -      | comp-63.tsx |             | Label                         |
| -      | comp-64.tsx |             | Label, Error                  |
| -      | comp-65.tsx |             | Label                         |
| -      | comp-66.tsx |             | Label                         |
| -      | comp-67.tsx |             | Label, Disabled               |
| -      | comp-68.tsx |             | Label, Button                 |
| -      | comp-69.tsx |             | Label, Button                 |
| -      | comp-70.tsx |             | Label, Button                 |
| -      | comp-71.tsx |             | Label                         |
| -      | comp-72.tsx |             | Label                         |
| -      | comp-73.tsx |             | Label                         |
| -      | comp-74.tsx |             | Textarea with characters left |
| -      | comp-75.tsx |             | Label                         |
| -      | comp-76.tsx |             | Label, Read only              |
| -      | comp-77.tsx |             | Label                         |

### Timeline

| Status | Source File  | Fluent File | Description                 |
| ------ | ------------ | ----------- | --------------------------- |
| -      | comp-530.tsx |             | Vertical timeline           |
| -      | comp-531.tsx |             | Vertical timeline           |
| -      | comp-532.tsx |             | Vertical timeline           |
| -      | comp-533.tsx |             | Vertical timeline           |
| -      | comp-534.tsx |             | Vertical timeline with icon |
| -      | comp-535.tsx |             | Vertical timeline with icon |
| -      | comp-536.tsx |             | Vertical timeline           |
| -      | comp-537.tsx |             | Vertical timeline           |
| -      | comp-538.tsx |             | Vertical timeline           |
| -      | comp-539.tsx |             | Vertical timeline with icon |
| -      | comp-540.tsx |             | Default variant             |
| -      | comp-541.tsx |             | Group variant               |

### Tooltip

| Status | Source File  | Fluent File | Description                              |
| ------ | ------------ | ----------- | ---------------------------------------- |
| -      | comp-354.tsx |             | Radix (outline, sm)                      |
| -      | comp-355.tsx |             | Radix (outline, sm)                      |
| -      | comp-356.tsx |             | Radix (outline, sm)                      |
| -      | comp-357.tsx |             | Radix (outline, sm)                      |
| -      | comp-358.tsx |             | Radix (outline, sm)                      |
| -      | comp-359.tsx |             | Image, Radix (outline, sm)               |
| -      | comp-360.tsx |             | Button, Kbd, Radix (outline, icon)       |
| -      | comp-361.tsx |             | Radix (outline, sm)                      |
| -      | comp-362.tsx |             | Chart, Radix (outline, sm)               |
| -      | comp-363.tsx |             | Hover card, User, Avatar, Profile, Radix |
| -      | comp-364.tsx |             | Hover card, User, Avatar, Profile, Radix |
| -      | comp-365.tsx |             | Hover card, Image, Radix                 |

### Tree

| Status | Source File  | Fluent File | Description              |
| ------ | ------------ | ----------- | ------------------------ |
| -      | comp-565.tsx |             | Default variant          |
| -      | comp-566.tsx |             | Default variant          |
| -      | comp-567.tsx |             | With icon                |
| -      | comp-568.tsx |             | With icon                |
| -      | comp-569.tsx |             | With icon                |
| -      | comp-570.tsx |             | With icon                |
| -      | comp-571.tsx |             | Filter, Search with icon |
| -      | comp-572.tsx |             | Filter, Search with icon |
| -      | comp-573.tsx |             | With icon                |
| -      | comp-574.tsx |             | Button (outline, sm)     |
| -      | comp-575.tsx |             | With icon                |
| -      | comp-576.tsx |             | Menu                     |
| -      | comp-597.tsx |             | Checkbox                 |
| -      | comp-598.tsx |             | Checkbox                 |
| -      | comp-599.tsx |             | Checkbox with icon       |
