export const CORE_MENU = [

    {
        name: 'Pages',
        url: 'system/sites',
        permission: 'view_pages',
        icon: 'fa fa-edit',
        active: false,
        children: [
            {
                name: 'All Pages',
                url: '/pages',
                permission: 'view_pages',
            },
            {
                name: 'Add New',
                url: '/pages/add',
                permission: 'add_pages',
            },
        ]
    }
];
