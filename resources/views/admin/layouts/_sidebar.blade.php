<li class="active">
    <a data-toggle="collapse" href="#menu" aria-expanded="true">
        <i class="ti-panel"></i>
        <p>Dashboard
            <b class="caret"></b>
        </p>
    </a>
    <div class="collapse in" id="menu">
        <ul class="nav">
            <li class="{{ isActive('admin') }}">
                <a href="{{ route('admin') }}">
                    {{-- <span class="sidebar-mini">Vu</span> --}}
                    <span class="sidebar-normal">Vu d'ensemble</span>
                </a>
            </li>
            <li class="{{ isActive('admin.stat') }}">
                <a href="{{ route('admin.stat') }}">
                    <span class="sidebar-normal">Stats details</span>
                </a>
            </li>
            <li class="{{ isActive('admin.product') }}">
                <a href="{{ route('admin.product') }}">
                    <span class="sidebar-normal">Gestion des produits</span>
                </a>
            </li>
        </ul>
    </div>
</li>

